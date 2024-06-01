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

        first_line = read_file.readline()
        all_text.append('              <button id="' + first_line.replace(" ", "") + '" class="recipe">')
        all_text.append('                  <h3>' + first_line.strip() + '</h3>\n')
        all_text.append('              </button>\n')

        for line in read_file:



if __name__ == '__main__':
    main()