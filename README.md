# VESNA PROJECT

This is a train project based on <a href='https://www.figma.com/file/5qLjm23YfuTE9ieWlP701p/%D1%81%D0%B0%D0%B9%D1%82-VESNA-(Copy)?node-id=0%3A1'>this beautiful layout design</a> to enhance our frontend skills. Here we focus on creating an adaptive web-page that includes <a href='https://getbem.com/'>BEM</a>, <a href='https://sass-lang.com/'>SCSS</a> as well as flex positioning methods.<br>
<b>You can check out the result right here: https://taorkon.github.io/vesna-project/</b>

<p>add project objectives and requeirements</p>

## SPRINTS

### Sprint 1

<ul>
  <li>Desktop version</li>
  <li>Documentation</li>
  <li>Tests</li>
  <li>Review</li>
</ul>

### Sprint 2

<ul>
  <li>Mobile version</li>
  <li>Documentation</li>
  <li>Tests</li>
  <li>Review</li>
  <li>Presentation</li>
</ul>

## DESCRIPTION

### 1. File Structure

### 2.BEM

#### class = 'name'
<p></p>
<p>Имя блока</p>

#### class = 'double-name'
<p>Составное имя блока (если надо использовать больше 1го слова). Так же может быть и у элемента.</p>
<p></p>

#### class = 'name__element'
<p>Имя элемента блока. Может быть составным class = 'name__element-name'</p>
<p></p>

#### class = 'name name--modifier'
<p>Имя блока с модификатором.</p>
<p></p>

#### class = 'name__element name__element--modifier'
<p>Имя элемента с модификатором.</p>
<p></p>

#### class = 'name1 name2'
<p>Миксин.</p>
<p></p>

#### pictures, logos, containers & holders naming

### 3. Styles

#### 3.1 Colors

<p>Separate file with variables (<i>colors.scss</i>) with all colors used in the project. Find it imported at the very top of the <i>styles.scss</i>.</p>
<p>colors in the project</p>

#### 3.2 Fonts
<p>Separate file with imports and mixins (<i>fonts.scss</i>) with all fonts used in the project, which reduced code lengh by roughly 130 lines (imported at the very top of <i>styles.scss</i>). Mixins include <i>font-family, font-style, font-weight, font-size, line-height</i> and sometimes <i>letter-spacing</i>. Names construction is <i>[font-family]-[font-weight]-[font-size]</i>, e.g. <i>noah-400-24</i>.</p>

<p>fonts in the project</p>

#### 3.3 Blocks
<p>BEM blocks and their modificators' styles are at the top of <i>styles.scss</i>. We reuse <i>.button, .title, .description</i> and <i>.get-instruction</i>. They might be moved to a separate .scss file later on</p>

#### 3.4 Positioning
<p> We exclusively use <i>flex</i> positioning for out website. Although we do find grid-layout an extremely useful tool, it did not seem to be a necessaty in this particular project.</p>

### 4. Picture Naming
<p>Все картинки .jpg и .png - <b>элементы</b></p>
<p>Все лого .svg - <b>блоки</b>. Использовать заранее созданные названия (подсказка в комментариях над каждым блоком в index.html)</p>
