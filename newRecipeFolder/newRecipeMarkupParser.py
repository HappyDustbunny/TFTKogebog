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
        all_text.append('              <button id="' + first_line.replace(" ", "") + '" class="recipe">\n')
        all_text.append('                  <h3>' + first_line.strip() + '</h3>\n')
        all_text.append('              </button>\n')
        
        # next_line = read_file.readline()
        # all_text.append('              <div class="ingredienser">\n')
        # all_text.append('                  <div class="recipeHeading">\n')
        # all_text.append('                  <p class="antal">' + next_line + '</p>\n')
        # all_text.append('                  <button class="share">Del</button>\n')
        # all_text.append('              </div>\n')

        for line in read_file:
            if line:
                chunk.append(line)
            if line.strip() == 'Ingredienser':
                all_text = wrap_ingredients(chunk, all_text)
                if line.strip():
                    chunk.append(line)
            elif line.strip() == 'Slut':  # REMEMBER to remove () here
                all_text = wrap_method(chunk, all_text)

        for line in all_text:
            out_file.writelines(line)
        
    print("Over and out")



def wrap_ingredients(chunk, all_text):
    all_text.append('<div class="ingredienser">')
    all_text.append('<p class="antal"> ' + chunk[0].strip() + ' </p>\n')
    all_text.append('<b> Ingredients: </b>\n')
    for line in chunk:
        if line[0] == '(' and line[-2] == ')' or line == '\n':
            pass
        else:
            all_text.append('\t<p><label><input type="checkbox"> ' + line.strip() + ' </label></p>\n')

    all_text.append('</div>\n')
    return all_text         


def wrap_method(chunk, all_text):
    all_text.append('<div class="howto"> <b> Fremgangsm&oring;de: </b>\n')
    for line in chunk:
        if line.strip() == 'Fremgangsm&oring;de:' or line == '\n':
            pass
        else:
            all_text.append('\t<p><label><input type="checkbox">' + line.strip() + '</label></p>\n')

    all_text.append('\t<button class="slut">(End)</button>')
    all_text.append('</div>\n')
    return all_text


if __name__ == '__main__':
    main()