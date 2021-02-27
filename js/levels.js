const description = {
  type: {
    helpTitle: "cible des éléments en fonction du nom de leur balise.",
    selectorName: "Type Selector",
    syntax: "A",
    help:
      "En français <b>sélecteur de type.</b> Les <b>sélecteurs de type</b> ciblent des éléments en fonction du nom de leur balise (<i>tag</i>) HTML ou XML, comme <tag>div</tag>, <tag>p</tag>, <tag>ul</tag>, <tag>assiette</tag> etc.",
    examples: [
      "<strong>div</strong> cible tous les éléments <tag>div</tag>.",
      "<strong>p</strong> cible tous les éléments <tag>p</tag>, donc tous les paragraphes.",
    ],
  },
  class: {
    selectorName: "Class Selector",
    helpTitle: "cible les éléments par l'attribut <code>classe</code>",
    syntax: ".classname",
    help:
      "En français <b>sélecteur de classe.</b> Le symbole <strong>.</strong> suivi (sans espace) par le  nom de la classe permet de cibler tous les éléments qui ont cette classe.",
    examples: [
      '<strong>.best</strong>  cible tous les éléments avec <strong>class="best"</strong>',
    ],
  },
  descendant: {
    helpTitle: "cible B qui ont un élément ancêtre A",
    selectorName: "Descendant Combinator",
    doThis: "Je vais prendre un toast - celui sur l'assiette, svp...",

    syntax: "A&nbsp;&nbsp;B",
    help:
      "En français : le combinateur de descendance. Permet de combiner deux sélecteurs sous la forme  A&nbsp;&nbsp;B.<br> A&nbsp;&nbsp;B cible des éléments qui correspondent au sélecteur <strong>B</strong> uniquement si ceux-ci ont un élément ancêtre qui correspond au premier sélecteur (<strong>A</strong>).<br/> Attention à l'espace entre deux éléments.",
    examples: [
      "<strong>p&nbsp;strong</strong> cible les éléments <tag>strong</tag> à l'intérieur des <tag>p</tag>",
      "<strong>#cool&nbsp;span</strong> cible les éléments <tag>span</tag> à l'intérieur de l'élément avec <strong>id=\"cool\"</strong>",
    ],
  },
}

var levels = [
  {
    doThis: "Je prends des assiettes, svp !",
    selector: "assiette",
    ...description.type,
    boardMarkup: `
    <assiette/>
    <assiette/>
    `,
  },
  {
    doThis: ".. et aussi 2 boîtes à emporter, svp...",
    selector: "boite",
    ...description.type,
    boardMarkup: `
    <boite/>
    <assiette/>
    <boite/>
    `,
  },
  {
    doThis: "Je peux avoir la jolie assiette pour ma nièce ?",
    selector: "#jolie",
    selectorName: "ID Selector",
    helpTitle:
      "cible un élément par son identifiant (l'attribut <code>id</code>)",
    syntax: "#id",
    help:
      "En français <b>sélecteur d'identifiant.</b> Avec le symbole <strong>#</strong> suivi (sans espace) par le nom d'identifiant on peut cibler un élément par son attribut <strong>id.</strong>",
    examples: [
      '<strong>#cool</strong> cible l\'élément avec <strong>id="cool"</strong>',
    ],
    boardMarkup: `
    <assiette id="jolie"/>
    <assiette/>
    <boite/>
    `,
  },
  {
    doThis: "Je vais prendre aussi des petits toasts.",
    selector: ".mini",
    ...description.class,
    boardMarkup: `
    <toast/>
    <toast class="mini"/>
    <assiette>
      <toast class="mini"/>
    </assiette>
    <assiette/>
    `,
  },
  {
    doThis: "Small is the new big. Je prends des mignardises, svp.",
    selector: ".mini",
    ...description.class,
    boardMarkup: `
    <toast/>
    <donut class="mini"/>
    <assiette>
      <toast class="mini"/>
    </assiette>
    <assiette/>
    `,
  },
  {
    doThis: "Je vais prendre des 'french toasts'.",
    selector: "[lang='fr']",
    selectorName: "Attribute selector",
    helpTitle:
      "cible un élément selon la présence d'un attribut ou selon la valeur donnée d'un attribut.",
    syntax: '[attribut="value"], [attribut]',
    help: "En français <b>sélecteur d'attribut.</b>",
    examples: [
      "<strong>[id]</strong> cible tous les éléments qui ont un attribut <code>id</id>",
      '<strong>[type="text"]</strong> cible tous les éléments qui ont un attribut <strong>type</strong> égal à "text"',
    ],
    boardMarkup: `
    <toast/>
    <toast/>
    <toast lang="fr"/>
    <assiette>
      <toast lang="fr"/>
    </assiette>
    <assiette/>
    `,
  },
  {
    ...description.descendant,
    selector: "assiette toast",
    boardMarkup: `
    <boite/>
    <assiette>
      <toast/>
    </assiette>
    <toast/>
    `,
  },
  {
    ...description.descendant,
    selector: "#jolie cupcake",
    boardMarkup: `
    <boite>
    <donut/>
    </boite>
    <assiette id="jolie">
      <cupcake/>
    </assiette>
    <assiette>
      <cupcake/>
    </assiette>
    `,
  },
  {
    doThis: "Moi, je vais prendre des mini donuts, svp.",
    selector: "donut.mini",
    helpTitle: "Combinons les sélecteurs!",
    syntax: "A.classname",
    help:
      "A.classname veut dire un élément <strong>A</strong> avec la classe <strong>classname</strong> - en collant des sélecteurs ensemble (sans espace) on ajoute des restrictions. </br></br><strong>assiette.mini</strong> et <strong>assiette&nbsp;&nbsp;.mini</strong> sont deux sélecteurs complétement différents : le premier cible des petites assiettes, le deuxième les petits éléments dans les assiettes.",
    examples: [
      '<strong>ul.important</strong> cible tous éléments <tag>ul</tag> qui ont la classe <strong>class="important"</strong>',
      '<strong>#big.wide</strong> cible un élément avec l\'identifiant <strong>id="big"</strong> qui a aussi la classe <strong>class="wide"</strong>',
    ],
    boardMarkup: `
    <toast/>
    <toast class="mini"/>
    <boite>
      <donut class="mini"/>
    </boite>
    <assiette>
      <donut/>
    </assiette>
    <assiette>
      <donut class="mini"/>
    </assiette>`,
  },
  {
    doThis: "Des mini donuts, svp, mais ceux qui sont dans les boîtes.",
    selector: "boite donut.mini",
    syntax: "On se la joue",
    helpTitle: "You can do it...",
    help: "Combine tout ce que tu viens d'apprendre",
    boardMarkup: `
    <boite>
      <donut/>
    </boite>
    <donut class="mini"/>
    <boite>
      <donut class="mini"/>
    </boite>
    <boite>
      <toast class="mini"/>
    </boite>
    <boite>
      <donut class="mini"/>
    </boite>
    `,
  },
  {
    doThis: "Je peux avoir les assiettes et les boîtes, svp ?",
    selector: "assiette,boite",
    selectorName: "Selector list (,)",
    helpTitle: "Liste différents  sélecteurs avec des virgules...!",
    syntax: "A, B",
    help:
      "ceci permet de cibler en même temps les éléments <strong>A</strong> et <strong>B</strong>. On peut ainsi combiner plusieurs types de sélecteurs et en avoir plus de deux.",
    examples: [
      '<strong>p, .fun</strong> cible tous les paragraphes et tous les éléments avec la classe <strong>class="fun"</strong>',
      "<strong>a, p, div</strong> cible tous les liens, paragraphes et divs",
    ],
    boardMarkup: `
    <cupcake class="mini"/>
    <cupcake/>
    <assiette>
    </assiette>
    <boite>
    </boite>
    <assiette>
    </assiette>
    <cupcake/>
    <cupcake class="mini"/>
    `,
  },
  {
    doThis: "Allez, je veux tout !",
    selector: "*",
    selectorName: "The Universal Selector",
    helpTitle:
      "You can select everything! En français - sélecteur universel.  Il correspond à un élément de n'importe quel type.",
    syntax: "*",
    help: "Cibler l'univers !",
    examples: [
      "<strong>p *</strong> cible tous les éléments à l'intérieur d'un paragraphe.",
    ],
    boardMarkup: `
    <toast/>
    <assiette>
      <donut class="mini" />
    </assiette>
    <boite/>
    <boite>
      <donut/>
    </boite>
    <assiette id="jolie"/>
    `,
  },
  {
    selectorName: "Child Selector",
    syntax: "A > B&nbsp;",
    doThis:
      "Je prends le toast, celui qui est posé directement sur l'assiette...",
    selector: "assiette > toast",
    helpTitle: "cible l'enfant direct d'un élément",
    help:
      "Avec le symbole <strong>></strong> on peut cibler des éléments qui sont des enfants directs d'un autre élément.",
    examples: [
      "<strong>A > B</strong> cible tous les <strong>B</strong> qui se trouvent directement dans un <strong>A</strong>",
    ],
    boardMarkup: `
    <assiette>
      <boite>
        <toast/>
      </boite>
    </assiette>
    <assiette>
      <toast/>
    </assiette>
    <assiette/>
    <toast/>
    <toast class="mini"/>
    `,
  },
  {
    doThis: "... et les toasts posés juste après les assiettes.",
    selector: "assiette + toast",
    helpTitle: "cible un élément suivant",
    selectorName: "en anglais : Adjacent Sibling Selector",
    syntax: "A + B",
    help:
      "A + B cible tous les éléments <strong>B</strong> qui suivent (directement) les <strong>A</strong>.",
    examples: [
      '<strong>p + .intro</strong> cible tous les éléments avec la classe <strong>class="intro"</strong> qui suivent directement des paragraphes',
      "<strong>div + a</strong> cible tous les liens (<tag>a</tag>) qui suivent directement des <tag>div</tag>s",
    ],
    boardMarkup: `
    <boite>
      <toast class="mini"/>
    </boite>
    <assiette />
    <toast class="mini"/>
    <assiette />
    <toast/>
    <toast class="mini"/>
    <toast class="mini"/>
    `,
  },
  {
    doThis: "... et tous les cupcakes posés après le toast.",
    selector: "toast ~ cupcake",
    helpTitle: "cible des éléments suivants",
    selectorName: "en anglais : General sibling combinator",
    syntax: "A ~ B",
    help:
      "A ~ B cible tous les éléments <strong>B</strong> qui suivent les <strong>A</strong>.",
    examples: [
      "<strong>h2  ~ p</strong> cible tous les paragraphes qui suivent h2 (et sont au sein du même élément parent)",
    ],
    boardMarkup: `
    <boite />
    <cupcake />
    <toast/>
    <cupcake />
    <cupcake class="mini"/>
    <cupcake />
    `,
  },
  {
    doThis: "... et toutes le mignardises posées après le boite.",
    selector: "boite ~ .mini",
    helpTitle: "cible des éléments suivants",
    selectorName: "en anglais : General sibling combinator",
    syntax: "A ~ B",
    help:
      "A ~ B cible tous les éléments <strong>B</strong> qui suivent les <strong>A</strong>.",
    examples: [
      "<strong>h2  ~ p</strong> cible tous les paragraphes qui suivent h2 (et sont au sein du même élément parent)",
    ],
    boardMarkup: `
    <cupcake class="mini"/>
    <boite />
    <cupcake class="mini" />
    <toast class="mini"/>
    <cupcake />
    <cupcake class="mini"/>
    <cupcake class="mini"/>
    `,
  },
  {
    selectorName: "en anglais : First Child Pseudo-selector",
    helpTitle:
      "cible l'élément qui est le premier enfant de son élément parent",
    doThis: "Je voudrais prendre la première assiette, svp.",
    selector: "assiette:first-child",
    syntax: ":first-child",
    examples: [
      "<strong>:first-child</strong> cible tous les éléments qui sont les premiers enfants de leur parent.",
      "<strong>p:first-child</strong> cible tous les paragraphes qui sont les premiers enfants de leur parent.",
      "<strong>div p:first-child</strong> cible tous les paragraphes qui sont les premiers enfants d'un <tag>div</tag>.",
    ],
    boardMarkup: `
    <assiette />
    <assiette />
    <assiette />
    `,
  },
  {
    selectorName: "en anglais : Last Child Pseudo-selector",
    helpTitle:
      "Cible l'élément qui est le dernier enfant de son élément parent",
    doThis: "Et moi, la dernière, svp.",
    selector: "assiette:last-child",
    syntax: ":last-child",
    examples: [
      "<strong>:last-child</strong> cible tous les éléments qui sont les derniers enfants de leur parent.",
      "<strong>p:last-child</strong> cible tous les paragraphes qui sont les derniers enfants de leur parent.",
      "<strong>div p:last-child</strong> cible tous les paragraphes qui sont les derniers enfants d'un <tag>div</tag>.",
    ],
    boardMarkup: `
    <assiette />
    <assiette />
    <assiette />
    `,
  },
  {
    selectorName: "en anglais : nth Child Pseudo-selector",
    helpTitle:
      "Cible l'élément qui est l'enfant numéro ... de son élément parent",
    doThis: "Je prendrai bien la 3e assiette, svp.",
    selector: "assiette:nth-child(3)",
    syntax: ":nth-child(..)",
    examples: [
      "<strong>:nth-child(2)</strong> cible tous les éléments qui sont les 2e enfants de leur parent.",
      "<strong>p:nth-child(2)</strong> cible tous les paragraphes qui sont les 2e enfants de leur parent.",
      "<strong>div p:nth-child(2)</strong> cible tous les paragraphes qui sont les 2e enfants d'un <tag>div</tag>.",
      "<strong>:nth-child(2n)</strong> cible tous les éléments qui sont les enfants pairs de leur parent.",
      "<strong>:nth-child(2n+1)</strong> cible tous les éléments qui sont les enfants impairs de leur parent.",
      "<strong>:nth-child(3n+1)</strong> cible tous les éléments qui sont les enfants numéro 1, 4, 7, 10, 13, ... de leur parent.",
    ],
    boardMarkup: `
    <assiette />
    <assiette />
    <assiette />
<assiette />
    <assiette />
    `,
  },
  {
    selectorName: "en anglais : nth Child Pseudo-selector",
    helpTitle:
      "Cible l'élément qui est l'enfant numéro ... de son élément parent",
    doThis: "Je prendrai bien la 1e, 3e et 5e assiette, svp.",
    selector: "assiette:nth-child(2n+1)",
    syntax: ":nth-child(..)",
    examples: [
      "<strong>:nth-child(2)</strong> cible tous les éléments qui sont les 2e enfants de leur parent.",
      "<strong>p:nth-child(2)</strong> cible tous les paragraphes qui sont les 2e enfants de leur parent.",
      "<strong>div p:nth-child(2)</strong> cible tous les paragraphes qui sont les 2e enfants d'un <tag>div</tag>.",
      "<strong>:nth-child(2n)</strong> cible tous les éléments qui sont les enfants pairs de leur parent.",
      "<strong>:nth-child(2n+1)</strong> cible tous les éléments qui sont les enfants impairs de leur parent.",
      "<strong>:nth-child(3n+1)</strong> cible tous les éléments qui sont les enfants numéro 1, 4, 7, 10, 13, ... de leur parent.",
      "<strong>:nth-child(n+3)</strong> cible tous les éléments qui sont les enfants numéro 3, 4, 5, ... de leur parent.",
    ],
    boardMarkup: `
    <assiette />
    <assiette />
    <assiette />
<assiette />
<assiette />
    <assiette />
    `,
  },
  {
    selectorName: "en anglais : First of type Pseudo-selector",
    helpTitle: "Cible l'élément qui est le premier enfant de son type",
    doThis: "Donnez moi la première assiette, svp.",
    selector: "assiette:first-of-type",
    syntax: ":first-of-type",
    examples: [
      "<strong>:first-of-type</strong> cible tous les éléments qui sont les premiers enfants de leur type.",
      "<strong>p:first-of-type</strong> cible tous les premiers paragraphes.",
      "<strong>div p:first-of-type</strong> cible tous les premiers paragraphes qui sont dans un <tag>div</tag>.",
    ],
    boardMarkup: `
    <boite />
    <assiette />
    <assiette />
    <assiette />
    `,
  },
  {
    selectorName: "en anglais : First of type Pseudo-selector",
    helpTitle: "Cible l'élément qui est le premier enfant de son type",
    doThis: "Donnez moi la première assiette et la première boite, svp.",
    selector: ":first-of-type",
    syntax: ":first-of-type",
    examples: [
      "<strong>:first-of-type</strong> cible tous les éléments qui sont les premiers enfants de leur type.",
      "<strong>p:first-of-type</strong> cible tous les premiers paragraphes.",
      "<strong>div p:first-of-type</strong> cible tous les premiers paragraphes qui sont dans un <tag>div</tag>.",
    ],
    boardMarkup: `
    <boite />
    <boite />
    <assiette />
    <assiette />
    <boite />
    <assiette />
    `,
  },
  {
    doThis: "Donuts, mais pas les petits, svp...",
    selector: "donut:not(.mini)",
    selectorName: "en anglais : Negation pseudo-class",
    helpTitle: "Utilise la negation pour cibler les élément",
    syntax: ":not(..)",
    examples: [
      "<strong>:not(p)</strong> cible tous les éléments qui ne sont pas des paragraphes.",
      "<strong>p:not(.subtitle)</strong> cible tous les paragraphes qui n'ont pas de classe <i>subtitile</i>.",
      "<strong>li:not(:first-child)</strong> cible tous les li qui ne sont les premiers enfants.",
    ],
    //help : 'You can combine the class selector with other selectors, like the type selector.',
    boardMarkup: `
    <donut/>
    <donut class="mini"/>
    <donut/>
    <boite>
      <donut class="mini"/>
    </boite>
    <assiette>
      <donut/>
    </assiette>
    <assiette>
      <donut/>
    </assiette>`,
  },
  {
    doThis: "Je prends tout, sauf le cupcake, svp...",
    selector: ":not(cupcake)",
    selectorName: "en anglais : Negation pseudo-class",
    helpTitle: "Utilise la negation pour cibler les élément",
    syntax: ":not(..)",
    examples: [
      "<strong>:not(p)</strong> cible tous les éléments qui ne sont pas des paragraphes.",
      "<strong>p:not(.subtitle)</strong> cible tous les paragraphes qui n'ont pas de classe <i>subtitile</i>.",
      "<strong>li:not(:first-child)</strong> cible tous les li qui ne sont les premiers enfants.",
    ],
    //help : 'You can combine the class selector with other selectors, like the type selector.',
    boardMarkup: `
    <donut/>
    <donut class="mini"/>
    <boite/>
    <donut class="mini"/>
    <cupcake/>
    <assiette/>
    <donut/>`,
  },
  {
    doThis: "Je prends tout, sauf le petit cupcake, svp...",
    selector: ":not(cupcake.mini)",
    selectorName: "en anglais : Negation pseudo-class",
    helpTitle: "Utilise la negation pour cibler les élément",
    syntax: ":not(..)",
    examples: [
      "<strong>:not(p)</strong> cible tous les éléments qui ne sont pas des paragraphes.",
      "<strong>p:not(.subtitle)</strong> cible tous les paragraphes qui n'ont pas de classe <i>subtitile</i>.",
      "<strong>li:not(:first-child)</strong> cible tous les li qui ne sont les premiers enfants.",
    ],
    //help : 'You can combine the class selector with other selectors, like the type selector.',
    boardMarkup: `
    <donut/>
    <donut class="mini"/>
    <donut/>
      <donut class="mini"/>
    <cupcake class="mini"/>
     <cupcake/>
      <donut/>
      <donut/>`,
  },
  {
    doThis: "Ceux-là, svp...",
    selector: "assiette donut",
    //selectorName : "",
    //helpTitle: "Combine the Class Selector",
    syntax: "Challenge 1",
    //help : 'You can combine the class selector with other selectors, like the type selector.',
    boardMarkup: `
    <donut/>
    <donut class="mini"/>
    <boite>
      <donut class="mini"/>
    </boite>
    <assiette>
      <donut/>
    </assiette>
    <assiette>
      <donut class="mini"/>
    </assiette>`,
  },
  {
    doThis: "... et ceci aussi !",
    selector: "assiette donut.mini",
    //helpTitle: "Combine the Class Selector",
    syntax: "Challenge 2",
    //help : 'You can combine the class selector with other selectors, like the type selector.',
    boardMarkup: `
    <donut/>
    <donut class="mini"/>
    <assiette>
      <toast class="mini"/>
    </assiette>
    <assiette>
      <donut/>
    </assiette>
    <assiette>
      <donut class="mini"/>
    </assiette>`,
  },
  {
    doThis: "Je prends les mignardises, qui sont posées sur les assiettes",
    selector: "assiette .mini",
    //helpTitle: "Combine the Class Selector",
    syntax: "Challenge 3",
    //help : 'You can combine the class selector with other selectors, like the type selector.',
    boardMarkup: `
    <donut/>
    <donut class="mini"/>
    <assiette>
      <toast class="mini"/>
    </assiette>
    <assiette>
      <donut/>
    </assiette>
    <assiette>
      <donut class="mini"/>
    </assiette>`,
  },
  {
    doThis: "Ceux-ci, svp !",
    selector: "boite+cupcake",
    syntax: "Challenge 4",
    boardMarkup: `
    <boite/>
    <cupcake/>
    <cupcake/>
    <boite/>
    <cupcake/>
    <donut/>
    <boite>
      <cupcake/>
    </boite>
    `,
  },
  {
    doThis: "Et ceux-ci aussi !",
    selector: ":first-child",
    syntax: "Challenge 5",
    boardMarkup: `
    <toast/>
    <assiette>
      <donut class="mini" />
    </assiette>
    <boite/>
    <boite>
      <donut/>
    </boite>
    <assiette/>
    `,
  },
]
