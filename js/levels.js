var levels = [
  {
    doThis: "Je prends des assiettes, svp !",
    selector: "assiette",
    helpTitle: "cible des éléments d'un certain type.",
    selectorName: "en anglais : Type Selector",
    syntax: "A",
    help:
      "Par type en veut dire une balise (un tag) HTML ou XML, comme <tag>div</tag>, <tag>p</tag>, <tag>ul</tag>, <tag>assiette</tag> etc.",
    examples: [
      "<strong>div</strong> cible tous les éléments <tag>div</tag>.",
      "<strong>p</strong> cible tous les éléments <tag>p</tag>, donc tous les paragraphes.",
    ],
    boardMarkup: `
    <assiette/>
    <assiette/>
    `,
  },
  {
    doThis: ".. et aussi 2 boîtes à emporter, svp...",
    selector: "boite",
    helpTitle: "cible des éléments de certain type.",
    selectorName: "en anglais : Type Selector",
    syntax: "A",
    help:
      "Par type en veut dire une balise (un tag) HTML ou XML, comme <tag>div</tag>, <tag>p</tag>, <tag>ul</tag>, <tag>assiette</tag> etc.",
    examples: [
      "<strong>div</strong> cible tous les éléments <tag>div</tag>.",
      "<strong>p</strong> cible tous les éléments <tag>p</tag>, donc tous les paragraphes.",
    ],
    boardMarkup: `
    <boite/>
    <assiette/>
    <boite/>
    `,
  },
  {
    doThis: "Je peux avoir la jolie assiette pour ma nièce ?",
    selector: "#jolie",
    selectorName: "en anglais : ID Selector",
    helpTitle: "cible un élément par son ID",
    syntax: "#id",
    help:
      "Avec le symbole <strong>#</strong> suivi (sans espace) par le nom d'identifiant on peut cibler un élément par son <strong>id</strong>",
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
    helpTitle: "cible un élément dans un autre élement.",
    selectorName: "en anglais : Descendant Selector",
    doThis: "Je vais prendre un toast - celui sur l'assiette, svp...",
    selector: "assiette toast",
    syntax: "A&nbsp;&nbsp;B",
    help:
      "A&nbsp;&nbsp;B cible des <strong>B</strong> qui se trouvent dans les <strong>A</strong>.<br/> Attention à l'espace entre deux éléments.",
    examples: [
      "<strong>p&nbsp;strong</strong> cible les éléments <tag>strong</tag> à l'intérieur des <tag>p</tag>",
      "<strong>#jolie&nbsp;span</strong> cible les éléments <tag>span</tag> à l'intérieur de l'élément avec <strong>id=\"cool\"</strong>",
    ],
    boardMarkup: `
    <boite/>
    <assiette>
      <toast/>
    </assiette>
    <toast/>
    `,
  },
  {
    selectorName: "en anglais : Descendant Selector",
    doThis: "... et le cupcake, celui sur la jolie assiette...",
    selector: "#jolie cupcake",
    helpTitle: "cible un élément dans un autre élement.",
    syntax: "#id&nbsp;&nbsp;A",
    help:
      "A&nbsp;&nbsp;B cible des <strong>B</strong> qui se trouvent dans les <strong>A</strong>.<br/> Attention à l'espace entre deux éléments.",
    examples: [
      "<strong>p&nbsp;strong</strong> cible les éléments <tag>strong</tag> à l'intérieur des <tag>p</tag>",
      "<strong>#cool&nbsp;span</strong> cible tous les éléments <tag>span</tag> à l'intérieur de l'élément avec <strong>id=\"cool\"</strong>",
    ],
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
    doThis: "Je vais prendre aussi des petits toasts.",
    selector: ".mini",
    selectorName: "Class Selector",
    helpTitle: "cible les éléments par le  nom de la classe",
    syntax: ".classname",
    help:
      "Tu vas l'utiliser souvent. Le symbole <strong>.</strong> suivi (sans espace) par le  nom de la classe permet de cibler tous les éléments qui ont cette classe.",
    examples: [
      '<strong>.best</strong>  cible tous les éléments avec <strong>class="best"</strong>',
    ],
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
    selectorName: "Class Selector",
    helpTitle: "cible les éléments par le  nom de la classe",
    syntax: ".classname",
    help:
      "Tu vas l'utiliser souvent. Le symbole <strong>.</strong> suivi (sans espace) par le  nom de la classe permet de cibler tous les éléments qui ont cette classe.",
    examples: [
      '<strong>.best</strong>  cible tous les éléments avec <strong>class="best"</strong>',
    ],
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
    doThis: "Moi, je vais prendre des mini donuts, svp.",
    selector: "donut.mini",
    helpTitle: "Combiner les sélecteurs",
    syntax: "A.className",
    help:
      "A.className veut dire un élément A avec la classe className - en collant des sélecteurs ensemble (sans espace) on ajoute des restrictions. </br></br><strong>assiette.mini</strong> et <strong>assiette&nbsp;&nbsp;.mini</strong> sont deux sélecteurs complétement différents : le premier cible des petites assiettes, le deuxième les petits éléments dans les assiettes.",
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
    selectorName: "en anglais : Comma Combinator",
    helpTitle: "Combine les sélecteurs avec des virgules...!",
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
    selectorName: "en anglais : The Universal Selector",
    helpTitle: "You can select everything!",
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
    selectorName: "en anglais : Child Selector",
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
