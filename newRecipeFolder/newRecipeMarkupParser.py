import os
import re
import string

# This program parses recipes marked up like this:
# Name of the recipe
# (4 personer) (Start 1(-3) timer før)
#
# Ingredienser               Ikke Ingredienser:
# ...
# ...
#
# Fremgangsmåde               Ikke Fremgangsmåde:
# ...
# ...


def main():
    firstParenthsisFlag = True
    chunk = []
    all_text = []
    my_file = os.path.join('./newRecipeFolder', 'recipe.txt')

    with open(my_file, encoding='utf8') as in_file, \
            open("newRecipeFolder/recipe_output_file.html", "a", encoding='utf8') as out_file:
        read_file = in_file.readlines()

        first_line = read_file[0].strip()
        current_line = first_line.split()
        all_text.append('<button id="' + ''.join(n.capitalize() for n in current_line) + '" class="recipe">\n')
        all_text.append('    <h3>' + first_line + '</h3>\n')
        all_text.append('</button>\n')
        
        next_line = read_file[1].strip()
        all_text.append('<div class="ingredienser">\n')
        all_text.append('    <div class="recipeHeading">\n')
        all_text.append('    <p class="antal">' + re.sub('ø', '&oslash;', next_line, 50) + '</p>\n')
        all_text.append('    <button class="share">Del</button>\n')
        all_text.append('</div>\n')
        all_text.append('<b>Ingredienser:</b>\n')

        for line in read_file:
            if line.strip() == 'Fremgangsmåde':
                all_text = wrap_ingredients(chunk, all_text)
                chunk = []
            elif line.strip() == 'Slut':
                all_text = wrap_method(chunk, all_text)

            chunk.append(line)
            
            if firstParenthsisFlag and line[0] == '(': # and line[-2] == ')':
                chunk = []  # The two first line is handled above and therefore dropped
                firstParenthsisFlag = False

        for line in all_text:
            line = re.sub('æ', '&aelig;', line, 50)
            line = re.sub('ø', '&oslash;', line, 50)
            line = re.sub('å', '&aring;', line, 50)
            line = re.sub('Æ', '&AElig;', line, 50)
            line = re.sub('Ø', '&Oslash;', line, 50)
            line = re.sub('Å', '&Aring;', line, 50)
            out_file.writelines(line)
        
    print("Over and out")



def wrap_ingredients(chunk, all_text):
    for line in chunk:
        if line.strip() == '':
            all_text.append('    <br>\n')
        # elif line.strip()[0] == '(':
        #     pass
        elif line.strip() == 'Ingredienser':
            pass
        elif line.strip() == 'Fremgangsmåde':
            pass
        else:
            all_text.append('    <p><label><input type="checkbox"> ' + line.strip() + ' </label></p>\n')

    all_text.append('</div>\n\n')
    return all_text         


def wrap_method(chunk, all_text):
    all_text.append('<div class="howto"> \n\t<b> Fremgangsm&aring;de: </b>\n')
    for line in chunk:
        if line.strip() == 'Fremgangsmåde' or line == 'Slut':
            pass
        elif line.strip() == '':
            all_text.append('\t<br>\n')
        else:
            all_text.append('\t<p><label><input type="checkbox">' + line.strip() + '</label></p>\n')

    all_text.append('\t<button class="slut">(Slut)</button>\n')
    all_text.append('</div>\n')
    return all_text


if __name__ == '__main__':
    main()