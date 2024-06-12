import os
import re
import string

# This program parses recipes marked up like this:
# Name of the recipe
# (4 personer) (Start 1(-3) timer før)
#
# Ingredienser
# ...
# ...
#
# Fremgangsmåde
# ...
# ...


def main():
    chunk = []
    all_text = []
    my_file = os.path.join('.', 'recipe.txt')

    with open(my_file, encoding='utf8') as in_file, \
            open("recipe_output_file.html", "a", encoding='utf8') as out_file:
        read_file = in_file.readlines()

        first_line = read_file[0]
        current_line = first_line.split()
        all_text.append('              <button id="' + ''.join(n.capitalize() for n in current_line) + '" class="recipe">\n')
        all_text.append('                  <h3>' + first_line.strip() + '</h3>\n')
        all_text.append('              </button>\n')
        
        next_line = read_file[1]
        all_text.append('              <div class="ingredienser">\n')
        all_text.append('                  <div class="recipeHeading">\n')
        all_text.append('                  <p class="antal">' + re.sub('ø', '&oslash;', next_line, 50) + '</p>\n')
        all_text.append('                  <button class="share">Del</button>\n')
        all_text.append('              </div>\n')
        all_text.append('              <b>Ingredienser:</b>\n')

        for line in read_file:
            if line:
                line = re.sub('æ', '&aelig;', line, 50)
                line = re.sub('ø', '&oslash;', line, 50)
                line = re.sub('å', '&aring;', line, 50)
                line = re.sub('Æ', '&AElig;', line, 50)
                line = re.sub('Ø', '&Oslash;', line, 50)
                line = re.sub('Å', '&Aring;', line, 50)
                chunk.append(line)
            if line[0] == '(' and line[-2] == ')':
                chunk = []  # Done above
            elif line.strip() == 'Fremgangsm&aring;de':
                all_text = wrap_ingredients(chunk, all_text)
                chunk = []
            elif line.strip() == 'Slut':
                all_text = wrap_method(chunk, all_text)

        for line in all_text:
            out_file.writelines(line)
        
    print("Over and out")



def wrap_ingredients(chunk, all_text):
    for line in chunk:
        if line.strip() == '':
            all_text.append('\t<br>')
        elif line.strip() == 'Fremgangsm&aring;de':
            pass
        else:
            all_text.append('\t<p><label><input type="checkbox"> ' + line.strip() + ' </label></p>\n')

    all_text.append('</div>\n')
    return all_text         


def wrap_method(chunk, all_text):
    all_text.append('<div class="howto"> <b> Fremgangsm&aring;de: </b>\n')
    for line in chunk:
        if line.strip() == 'Fremgangsm&aring;de:' or line == 'Slut':
            pass
        elif line.strip() == '':
            all_text.append('\t<br>')
        else:
            all_text.append('\t<p><label><input type="checkbox">' + line.strip() + '</label></p>\n')

    all_text.append('\t<button class="slut">(Slut)</button>')
    all_text.append('</div>\n')
    return all_text


if __name__ == '__main__':
    main()