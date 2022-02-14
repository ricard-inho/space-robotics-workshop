// See: //www.gatsbyjs.com/docs/gatsby-config/

const path = require(`path`);

module.exports = {
  siteMetadata: {
    cvpr2022: {
      organizers: [
        {
          challenge: true,
          imageId: "devendra",
          name: "Devendra Singh Chaplot",
          oc: true,
          organization: "Meta AI",
          sab: false,
          site: "https://devendrachaplot.github.io/",
        },
        {
          challenge: true,
          imageId: "claudia",
          name: "Claudia Pérez D\u2019Arpino",
          oc: true,
          organization: "NVIDIA",
          sab: false,
          site: "https://ai.stanford.edu/~cdarpino/",
        },
        {
          challenge: true,
          imageId: "anthony",
          name: "Anthony Francis",
          oc: true,
          organization: "Google",
          sab: false,
          site: "https://research.google/people/author35466/",
        },
        {
          challenge: true,
          imageId: "chengshu",
          name: "Chengshu Li",
          oc: true,
          organization: "Stanford",
          sab: false,
          site: "https://www.chengshuli.me/",
        },
        {
          challenge: true,
          imageId: "oleksandr",
          name: "Oleksandr Maksymets",
          oc: true,
          organization: "Meta AI",
          sab: false,
          site: "https://research.facebook.com/people/maksymets-oleksandr/",
        },
        {
          challenge: false,
          imageId: "mike",
          name: "Mike Roberts",
          oc: true,
          organization: "Intel",
          sab: false,
          site: "https://mikeroberts3000.github.io/",
        },
        {
          challenge: false,
          imageId: "andrewS",
          name: "Andrew Szot",
          oc: true,
          organization: "GaTech",
          sab: false,
          site: "https://www.andrewszot.com/",
        },
        {
          challenge: true,
          imageId: "luca",
          name: "Luca Weihs",
          oc: true,
          organization: "AI2",
          sab: false,
          site: "https://lucaweihs.github.io/",
        },
        {
          challenge: true,
          imageId: "matt",
          name: "Matt Deitke",
          oc: true,
          organization: "AI2, UW",
          sab: false,
          site: "https://mattdeitke.com/",
        },
        {
          challenge: false,
          imageId: "sorean",
          name: "S\u00f6ren Pirk",
          oc: true,
          organization: "Google",
          sab: false,
          site: "https://www.pirk.io",
        },
        {
          challenge: false,
          imageId: "german",
          name: "German Ros",
          oc: true,
          organization: "Intel",
          sab: false,
          site: "https://germanros.net/",
        },
        {
          challenge: false,
          imageId: "joanne",
          name: "Joanne Truong",
          oc: true,
          organization: "GaTech",
          sab: false,
          site: "https://www.joannetruong.com/",
        },
        {
          challenge: false,
          imageId: "joseM",
          name: "Jose M. Alvarez",
          oc: false,
          organization: "NVIDIA",
          sab: true,
          site:
            "https://scholar.google.com/citations?user=Oyx-_UIAAAAJ&hl=en&oi=ao",
        },
        {
          challenge: false,
          imageId: "sonia",
          name: "Sonia Chernova",
          oc: false,
          organization: "GaTech",
          sab: true,
          site: "https://faculty.cc.gatech.edu/~chernova/",
        },
        {
          challenge: false,
          imageId: "ali",
          name: "Ali Farhadi",
          oc: false,
          organization: "Apple, UW",
          sab: true,
          site: "https://homes.cs.washington.edu/~ali/",
        },
        {
          challenge: false,
          imageId: "joseA",
          name: "Jose A. Iglesias-Guitian",
          oc: false,
          organization: "UDC-CITIC",
          sab: true,
          site: "http://www.j4lley.com/",
        },
        {
          challenge: true,
          imageId: "ani",
          name: "Aniruddha Kembhavi",
          oc: false,
          organization: "AI2",
          sab: true,
          site: "https://anikem.github.io/",
        },
        {
          challenge: false,
          imageId: "feifei",
          name: "Fei-Fei Li",
          oc: false,
          organization: "Stanford",
          sab: true,
          site: "https://profiles.stanford.edu/fei-fei-li",
        },
        {
          challenge: false,
          imageId: "antonio",
          name: "Antonio M. Lopez",
          oc: false,
          organization: "UAB-CVC",
          sab: true,
          site: "http://adas.cvc.uab.es/elektra/enigma-team/antonio-m-lopez/",
        },
        {
          challenge: true,
          imageId: "roberto",
          name: "Roberto Mart\u00edn-Mart\u00edn",
          oc: false,
          organization: "Stanford",
          sab: true,
          site: "https://robertomartinmartin.com/",
        },
        {
          challenge: false,
          imageId: "devi",
          name: "Devi Parikh",
          oc: false,
          organization: "GaTech, Meta AI",
          sab: true,
          site: "https://faculty.cc.gatech.edu/~parikh/",
        },
        {
          challenge: false,
          imageId: "silvio",
          name: "Silvio Savarese",
          oc: false,
          organization: "Salesforce, Stanford",
          sab: true,
          site: "https://profiles.stanford.edu/silvio-savarese",
        },
        {
          challenge: true,
          imageId: "manolis",
          name: "Manolis Savva",
          oc: false,
          organization: "SFU",
          sab: true,
          site: "https://msavva.github.io/",
        },
        {
          challenge: false,
          imageId: "jie",
          name: "Jie Tan",
          oc: false,
          organization: "Google",
          sab: true,
          site: "https://www.jie-tan.net/",
        },
        {
          challenge: true,
          imageId: "alexander",
          name: "Alexander Toshev",
          oc: false,
          organization: "Google",
          sab: true,
          site: "https://research.google/people/AlexanderToshev/",
        },
        {
          challenge: true,
          imageId: "fei",
          name: "Fei Xia",
          oc: false,
          organization: "Google",
          sab: false,
          site: "https://fxia22.github.io/",
        },
        {
          challenge: true,
          imageId: "karmesh",
          name: "Karmesh Yadav",
          oc: false,
          organization: "Meta AI",
          sab: false,
          site: "https://www.karmeshyadav.com/",
        },
        {
          challenge: true,
          imageId: "aaron",
          name: "Aaron Gokaslan",
          oc: false,
          organization: "Cornell",
          sab: false,
          site: "https://skylion007.github.io/",
        },
        {
          challenge: true,
          imageId: "rishabh",
          name: "Rishabh Jain",
          oc: false,
          organization: "eBay",
          sab: false,
          site: "https://rishabhjain.xyz/",
        },
        {
          challenge: true,
          imageId: "ram",
          name: "Ram Ramrakhya",
          oc: false,
          organization: "Gatech",
          sab: false,
          site: "https://ram81.github.io/",
        },
        {
          challenge: true,
          imageId: "santhosh",
          name: "Santhosh Kumar Ramakrishnan",
          oc: false,
          organization: "UT Austin",
          sab: false,
          site: "https://srama2512.github.io/",
        },
        {
          challenge: true,
          imageId: "erik",
          name: "Erik Wijmans",
          oc: false,
          organization: "GaTech",
          sab: false,
          site: "https://wijmans.xyz/",
        },
        {
          challenge: true,
          imageId: "ericU",
          name: "Eric Undersander",
          oc: false,
          organization: "Meta AI",
          sab: false,
          site: "https://www.ericundersander.com/",
        },
        {
          challenge: true,
          imageId: "alexanderC",
          name: "Alexander Clegg",
          oc: false,
          organization: "Meta AI",
          sab: false,
          site: "https://github.com/aclegg3",
        },
        {
          challenge: true,
          imageId: "dhruv",
          name: "Dhruv Batra",
          oc: false,
          organization: "GaTech, Meta AI",
          sab: true,
          site: "https://faculty.cc.gatech.edu/~dbatra/",
        },
        {
          challenge: true,
          imageId: "unnat",
          name: "Unnat Jain",
          oc: false,
          organization: "UIUC",
          sab: false,
          site: "https://unnat.github.io/",
        },
        {
          challenge: true,
          imageId: "eric",
          name: "Eric Kolve",
          oc: false,
          organization: "AI2",
          sab: false,
          site: "https://www.semanticscholar.org/author/Eric-Kolve/3386570",
        },
        {
          challenge: true,
          imageId: "roozbeh",
          name: "Roozbeh Mottaghi",
          oc: false,
          organization: "AI2, UW",
          sab: true,
          site: "https://roozbehm.info/",
        },
        {
          challenge: true,
          imageId: "mohit",
          name: "Mohit Shridhar",
          oc: false,
          organization: "UW",
          sab: false,
          site: "https://mohitshridhar.com/",
        },
        {
          challenge: true,
          imageId: "ishika",
          name: "Ishika Singh",
          oc: false,
          organization: "USC",
          sab: false,
          site: "https://ishikasingh.github.io/",
        },
        {
          challenge: true,
          imageId: "anthonyL",
          name: "Anthony Liang",
          oc: false,
          organization: "USC",
          sab: false,
          site: "https://aliang8.github.io/",
        },
        {
          challenge: true,
          imageId: "tiffany",
          name: "Tiffany Min",
          oc: false,
          organization: "CMU",
          sab: false,
          site: "https://soyeonm.github.io/",
        },
        {
          challenge: true,
          imageId: "yonatan",
          name: "Yonatan Bisk",
          oc: false,
          organization: "CMU",
          sab: false,
          site: "https://yonatanbisk.com/",
        },
        {
          challenge: true,
          imageId: "jesse",
          name: "Jesse Thomason",
          oc: false,
          organization: "USC",
          sab: false,
          site: "https://jessethomason.com/",
        },
        {
          challenge: true,
          imageId: "jacob",
          name: "Jacob Krantz",
          oc: false,
          organization: "Oregon State",
          sab: false,
          site: "https://jacobkrantz.github.io/",
        },
        {
          challenge: true,
          imageId: "alex",
          name: "Alex Ku",
          oc: false,
          organization: "Google",
          sab: false,
          site: "https://alexyku.github.io/",
        },
        {
          challenge: true,
          imageId: "stefan",
          name: "Stefan Lee",
          oc: false,
          organization: "Oregon State",
          sab: false,
          site: "https://web.engr.oregonstate.edu/~leestef/",
        },
        {
          challenge: true,
          imageId: "peter",
          name: "Peter Anderson",
          oc: false,
          organization: "Google",
          sab: false,
          site: "https://panderson.me/",
        },
        {
          challenge: true,
          imageId: "changan",
          name: "Changan Chen",
          oc: false,
          organization: "UT Austin",
          sab: false,
          site: "https://changan.io/",
        },
        {
          challenge: true,
          imageId: "sagnik",
          name: "Sagnik Majumder",
          oc: false,
          organization: "UT Austin",
          sab: false,
          site: "https://sagnikmjr.github.io/",
        },
        {
          challenge: true,
          imageId: "kristen",
          name: "Kristen Grauman",
          oc: false,
          organization: "UT Austin",
          sab: false,
          site: "https://www.cs.utexas.edu/users/grauman/",
        },
        {
          challenge: true,
          imageId: "chuang",
          name: "Chuang Gan",
          oc: false,
          organization: "IBM, MIT",
          sab: false,
          site: "https://people.csail.mit.edu/ganchuang/",
        },
        {
          challenge: true,
          imageId: "josh",
          name: "Josh Tenenbaum",
          oc: false,
          organization: "MIT",
          sab: false,
          site: "https://web.mit.edu/cocosci/josh.html",
        },
        {
          challenge: true,
          imageId: "ben",
          name: "Ben Talbot",
          oc: false,
          organization: "QUT",
          sab: false,
          site: "https://bentalbot.com",
        },
        {
          challenge: true,
          imageId: "angel",
          name: "Angel X. Chang",
          oc: false,
          organization: "SFU",
          sab: false,
          site: "https://angelxuanchang.github.io/",
        },
        {
          challenge: true,
          imageId: "soniaR",
          name: "Sonia Raychaudhuri",
          oc: false,
          organization: "SFU",
          sab: false,
          site: "https://sonia-raychaudhuri.github.io/",
        },
        {
          challenge: true,
          imageId: "tommaso",
          name: "Tommaso Campari",
          oc: false,
          organization: "SFU, UNIPD",
          sab: false,
          site: "https://www.tommasocampari.com",
        },
        {
          challenge: true,
          imageId: "david",
          name: "David Hall",
          oc: false,
          organization: "QUT",
          sab: false,
          site: "https://sites.google.com/view/davidhallcv/home",
        },
        {
          challenge: true,
          imageId: "niko",
          name: "Niko S\u00fcnderhauf",
          oc: false,
          organization: "QUT",
          sab: false,
          site: "https://nikosuenderhauf.github.io/",
        },
      ],
    },
    cvpr2021: {
      organizers: [
        {
          name: "Jose M. Alvarez",
          organization: "NVIDIA",
          imageId: "joseM",
          site: "//rsu.data61.csiro.au/people/jalvarez/",
          sab: true,
        },
        {
          name: "Peter Anderson",
          organization: "Google",
          imageId: "peter",
          site: "//panderson.me/",
          challenge: true,
        },
        {
          name: "Dhruv Batra",
          organization: "FAIR, Georgia Tech",
          imageId: "dhruv",
          site: "//www.cc.gatech.edu/~dbatra/",
          challenge: true,
          sab: true,
        },
        {
          name: "Yonatan Bisk",
          organization: "CMU",
          imageId: "yonatan",
          site: "//yonatanbisk.com/",
          challenge: true,
        },
        {
          name: "Suman Bista",
          organization: "QUT, ACRV, QCR",
          imageId: "suman",
          site: "//au.linkedin.com/in/suman-bista-88921044",
          challenge: true,
        },
        {
          name: "Angel X. Chang",
          organization: "SFU",
          imageId: "angel",
          site: "//angelxuanchang.github.io/",
          challenge: true,
        },
        {
          name: "Changan Chen",
          organization: "UT Austin, FAIR",
          imageId: "changan",
          site: "//changan.io/",
          challenge: true,
        },
        {
          name: "Sonia Chernova",
          organization: "Georgia Tech",
          imageId: "sonia",
          site: "//www.cc.gatech.edu/~chernova/",
          sab: true,
        },
        {
          name: "Claudia D'Arpino",
          organization: "Stanford",
          imageId: "claudia",
          site: "//ai.stanford.edu/~cdarpino/",
          challenge: true,
        },
        {
          name: "Feras Dayoub",
          organization: "QUT, ACRV, QCR",
          imageId: "feras",
          site: "//staff.qut.edu.au/staff/feras.dayoub",
          challenge: true,
        },
        {
          name: "Matt Deitke",
          organization: "AI2, UW",
          imageId: "matt",
          site: "//mattdeitke.com/",
          challenge: true,
        },
        {
          name: "Ali Farhadi",
          organization: "UW",
          imageId: "ali",
          site: "//homes.cs.washington.edu/~ali/",
          sab: true,
        },
        {
          name: "Anthony Francis",
          organization: "Google",
          imageId: "anthony",
          site: "//research.google/people/author35466/",
          challenge: true,
          oc: true,
        },
        {
          name: "Chuang Gan",
          organization: "MIT-IBM",
          imageId: "chuang",
          site: "//people.csail.mit.edu/ganchuang/",
          challenge: true,
        },
        {
          name: "Aaron Gokaslan",
          organization: "FAIR",
          imageId: "aaron",
          challenge: true,
          site: "//skylion007.github.io/",
        },
        {
          name: "Kristen Grauman",
          organization: "UT Austin, FAIR",
          imageId: "kristen",
          site: "//www.cs.utexas.edu/users/grauman/",
          challenge: true,
        },
        {
          name: "David Hall",
          organization: "QUT, ACRV, QCR",
          imageId: "david",
          site: "//sites.google.com/view/davidhallcv/home",
          challenge: true,
        },
        {
          name: "Winson Han",
          organization: "AI2",
          imageId: "winson",
          site: "//www.winsonhan.com/about",
          challenge: true,
        },
        {
          name: "Jose A. Iglesias-Guitian",
          organization: "UDC-CITIC",
          imageId: "joseA",
          site: "http://www.j4lley.com/",
          sab: true,
        },
        {
          name: "Rishabh Jain",
          organization: "Georgia Tech",
          imageId: "rishabh",
          site: "//rishabhjain.xyz/",
          challenge: true,
        },
        {
          name: "Unnat Jain",
          organization: "UIUC",
          imageId: "unnat",
          site: "//unnat.github.io/",
          challenge: true,
        },
        {
          name: "Jaewoo Jang",
          organization: "Stanford",
          imageId: "jaewoo",
          challenge: true,
          site: "//www.linkedin.com/in/jaewoo-jang-a6909968",
        },
        {
          name: "Aniruddha Kembhavi",
          organization: "AI2, UW",
          imageId: "aniruddha",
          site: "//anikem.github.io/",
          challenge: true,
          sab: true,
        },
        {
          name: "Apoorv Khandelwal",
          organization: "AI2",
          imageId: "apoorv",
          site: "//apoorvkh.com/",
          challenge: true,
        },
        {
          name: "Vladlen Koltun",
          organization: "Intel",
          imageId: "vladlen",
          site: "//vladlen.info/",
          sab: true,
        },
        {
          name: "Eric Kolve",
          organization: "AI2",
          imageId: "eric",
          site: "//www.semanticscholar.org/author/Eric-Kolve/3386570",
          challenge: true,
        },
        {
          name: "Jacob Krantz",
          organization: "Oregon State",
          imageId: "jacob",
          site: "//jacobkrantz.github.io/",
          challenge: true,
        },
        {
          name: "Alex Ku",
          organization: "Google",
          imageId: "alex",
          site: "//alexyku.github.io/",
          challenge: true,
        },
        {
          name: "Stefan Lee",
          organization: "Oregon State",
          imageId: "stefan",
          site: "//web.engr.oregonstate.edu/~leestef/",
          challenge: true,
        },
        {
          name: "Chengshu Li",
          organization: "Stanford",
          imageId: "chengshu",
          site: "//www.chengshuli.me/",
          challenge: true,
          oc: true,
        },
        {
          name: "Fei-Fei Li",
          organization: "Stanford",
          imageId: "feifei",
          site: "//profiles.stanford.edu/fei-fei-li",
          sab: true,
        },
        {
          name: "Antonio M. Lopez",
          organization: "UAB-CVC",
          imageId: "antonio",
          site: "http://www.cvc.uab.es/~antonio/",
          sab: true,
        },
        {
          name: "Oleksandr Maksymets",
          organization: "FAIR",
          imageId: "oleksandr",
          site: "//research.fb.com/people/maksymets-oleksandr/",
          challenge: true,
          sab: true,
        },
        {
          name: "Jitendra Malik",
          organization: "FAIR, UC Berkeley",
          imageId: "jitendra",
          site: "//people.eecs.berkeley.edu/~malik/",
          sab: true,
        },
        {
          name: "Roberto Mart\u00edn-Mart\u00edn",
          organization: "Stanford",
          imageId: "roberto",
          site: "//robertomartinmartin.com/",
          challenge: true,
          sab: true,
        },
        {
          name: "Roozbeh Mottaghi",
          organization: "AI2, UW",
          imageId: "roozbeh",
          site: "//roozbehm.info/",
          challenge: true,
          sab: true,
        },
        {
          name: "Devi Parikh",
          organization: "FAIR, Georgia Tech",
          imageId: "devi",
          site: "//www.cc.gatech.edu/~parikh/",
          sab: true,
        },
        {
          name: "Shivansh Patel",
          organization: "IIT Kanpur, SFU",
          imageId: "shivansh",
          site: "//shivanshpatel35.github.io/",
          challenge: true,
        },
        {
          name: "German Ros",
          organization: "Intel",
          imageId: "german",
          site: "//germanros.net/",
          oc: true,
        },
        {
          name: "Silvio Savarese",
          organization: "Stanford",
          imageId: "silvio",
          site: "//profiles.stanford.edu/silvio-savarese",
          sab: true,
        },
        {
          name: "Manolis Savva",
          organization: "SFU",
          imageId: "manolis",
          site: "//msavva.github.io/",
          challenge: true,
          sab: true,
        },
        {
          name: "Mohit Shridhar",
          organization: "UW",
          imageId: "mohit",
          site: "//mohitshridhar.com/",
          challenge: true,
        },
        {
          name: "Rohan Smith",
          organization: "QUT, ACRV, QCR",
          imageId: "rohan",
          site: "//au.linkedin.com/in/rohan-smith-4442b5160",
          challenge: true,
        },
        {
          name: "Niko S\u00fcnderhauf",
          organization: "QUT, ACRV, QCR",
          imageId: "niko",
          site: "//nikosuenderhauf.github.io/",
          challenge: true,
        },
        {
          name: "Ben Talbot",
          organization: "QUT, ACRV, QCR",
          imageId: "ben",
          site: "//staff.qut.edu.au/staff/b.talbot",
          challenge: true,
        },
        {
          name: "Josh Tenenbaum",
          organization: "MIT",
          imageId: "josh",
          site: "//cocosci.mit.edu",
          challenge: true,
        },
        {
          name: "Jesse Thomason",
          organization: "USC",
          imageId: "jesse",
          site: "//jessethomason.com/",
          challenge: true,
        },
        {
          name: "Alexander Toshev",
          organization: "Google",
          imageId: "alexander",
          site: "//research.google/people/AlexanderToshev/",
          challenge: true,
          sab: true,
        },
        {
          name: "Joanne Truong",
          organization: "Georgia Tech",
          imageId: "joanne",
          site: "//www.joannetruong.com/",
          oc: true,
        },
        {
          name: "Saim Wani",
          organization: "IIT Kanpur",
          imageId: "saim",
          site: "//saimwani.github.io/",
          challenge: true,
        },
        {
          name: "Luca Weihs",
          organization: "AI2",
          imageId: "luca",
          site: "//lucaweihs.github.io/",
          challenge: true,
          oc: true,
        },
        {
          name: "Andrew Westbury",
          organization: "FAIR",
          imageId: "andrew",
          site: "//www.linkedin.com/in/andrew-westbury-2757a31b",
          challenge: true,
        },
        {
          name: "Erik Wijmans",
          organization: "Georgia Tech",
          imageId: "erik",
          site: "//wijmans.xyz/",
          challenge: true,
          oc: true,
        },
        {
          name: "Fei Xia",
          organization: "Stanford",
          imageId: "fei",
          challenge: true,
          site: "http://fxia.me/",
        },
        {
          name: "Haoyang Zhang",
          organization: "QUT, ACRV, QCR",
          imageId: "haoyang",
          site: "//staff.qut.edu.au/staff/haoyang.zhang.acrv",
          challenge: true,
        },
      ],
    },
    cvpr2020: {
      organizers: [
        {
          name: "Jose M. Alvarez",
          imageId: "joseM",
          organization: "NVIDIA",
          site: "//rsu.data61.csiro.au/people/jalvarez/",
        },
        {
          name: "Anelia Angelova",
          imageId: "anelia",
          organization: "Google",
          site: "//research.google/people/AneliaAngelova/",
        },
        {
          name: "Dhruv Batra",
          imageId: "dhruv",
          organization: "GaTech, FAIR",
          site: "//www.cc.gatech.edu/~dbatra/",
        },
        {
          name: "Angel X. Chang",
          imageId: "angel",
          organization: "SFU",
          site: "//angelxuanchang.github.io/",
        },
        {
          name: "Samyak Datta",
          imageId: "samyak",
          organization: "GaTech",
          site: "//samyak-268.github.io/",
        },
        {
          name: "Matt Deitke",
          imageId: "matt",
          organization: "AI2, UW",
          site: "//mattdeitke.com/",
        },
        {
          name: "Ali Farhadi",
          imageId: "ali",
          organization: "Apple, UW",
          site: "//homes.cs.washington.edu/~ali/",
        },
        {
          name: "Aaron Gokaslan",
          imageId: "aaron",
          organization: "FAIR",
          site: "//skylion007.github.io/",
        },
        {
          name: "Aleksandra Faust",
          imageId: "aleksandra",
          organization: "Google",
          site: "//www.afaust.info/",
        },
        {
          name: "Jose A. Iglesias-Guitian",
          imageId: "joseA",
          organization: "UDC, CITIC",
          site: "http://www.j4lley.com/",
        },
        {
          name: "Abhishek Kadian",
          imageId: "abhishek",
          organization: "FAIR",
          site: "//abhiskk.github.io/",
        },
        {
          name: "Aniruddha Kembhavi",
          imageId: "ani",
          organization: "AI2, UW",
          site: "//anikem.github.io/",
        },
        {
          name: "Vangelis Kokkevis",
          imageId: "vangelis",
          organization: "TRI",
          site: "//www.semanticscholar.org/author/Vangelis-Kokkevis/3253769",
        },
        {
          name: "Vladlen Koltun",
          imageId: "vladlen",
          organization: "Intel",
          site: "//vladlen.info/",
        },
        {
          name: "Eric Kolve",
          imageId: "eric",
          organization: "AI2",
          site: "//www.semanticscholar.org/author/Eric-Kolve/3386570",
        },
        {
          name: "Stefan Lee",
          imageId: "stefan",
          organization: "Oregon State",
          site: "//web.engr.oregonstate.edu/~leestef/",
        },
        {
          name: "Yongjoon Lee",
          imageId: "yongjoon",
          organization: "Zoox",
          site: "//www.semanticscholar.org/author/Yongjoon-Lee/1770155",
        },
        {
          name: "Eric (Chengsu) Li",
          imageId: "chengshu",
          organization: "Stanford",
          site: "//www.chengshuli.me/",
        },
        {
          name: "Antonio Lopez",
          imageId: "antonio",
          organization: "CVC, UAB",
          site: "http://www.cvc.uab.es/~antonio/",
        },
        {
          name: "Oleksandr Maksymets",
          imageId: "oleksandr",
          organization: "FAIR",
          site: "//research.fb.com/people/maksymets-oleksandr/",
        },
        {
          name: "Jitendra Malik",
          imageId: "jitendra",
          organization: "UC Berkeley",
          site: "//people.eecs.berkeley.edu/~malik/",
        },
        {
          name: "Roberto Martín-Martín",
          imageId: "roberto",
          organization: "Stanford",
          site: "//robertomartinmartin.com/",
        },
        {
          name: "Roozbeh Mottaghi",
          imageId: "roozbeh",
          organization: "AI2, UW",
          site: "//roozbehm.info/",
        },
        {
          name: "Devi Parikh",
          imageId: "devi",
          organization: "GaTech, FAIR",
          site: "//www.cc.gatech.edu/~parikh/",
        },
        {
          name: "German Ros",
          imageId: "german",
          organization: "Intel",
          site: "//germanros.net/",
        },
        {
          name: "Manolis Savva",
          imageId: "manolis",
          organization: "SFU, FAIR",
          site: "//msavva.github.io/",
        },
        {
          name: "Dustin Schwenk",
          imageId: "dustin",
          organization: "AI2",
          site: "//www.semanticscholar.org/author/Dustin-Schwenk/34846449",
        },
        {
          name: "Philipp Slusallek",
          imageId: "philipp",
          organization: "DFKI",
          site: "//graphics.cg.uni-saarland.de/people/slusallek.html",
        },
        {
          name: "Julian Straub",
          imageId: "julian",
          organization: "FAIR",
          site: "//people.csail.mit.edu/jstraub/",
        },
        {
          name: "Jie Tan",
          imageId: "jie",
          organization: "Google",
          site: "//www.jie-tan.net/",
        },
        {
          name: "Alexander Toshev",
          imageId: "alexander",
          organization: "Google",
          site: "//sites.google.com/view/alextoshev",
        },
        {
          name: "Fei Xia",
          imageId: "fei",
          organization: "Stanford",
          site: "http://fxia.me/",
        },
        {
          name: "Erik Wijmans",
          imageId: "erik",
          organization: "GaTech",
          site: "//wijmans.xyz/",
        },
        {
          name: "Amir Zamir",
          imageId: "amir",
          organization: "EPFL",
          site: "//vilab.epfl.ch/zamir/",
        },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-120916510-7"],
      },
    },
  ],
};
