const menuItems = [
  {
    "id": 1,
    "name": "СЫРНАЯ ТАРЕЛКА",
    "category": "ЗАКУСКИ",
    "section": "",
    "description": "Благородные сыры с мёдом и орехами",
    "composition": "Пармезан, дор блю, бри, моцарелла, мёд, грецкий орех",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/zakuski-syrnaya-tarelka.png",
    "source": "menu.xlsx"
  },
  {
    "id": 2,
    "name": "РЫБНАЯ ТАРЕЛКА",
    "category": "ЗАКУСКИ",
    "section": "",
    "description": "Ассорти из рыбных деликатесов с пикантным соусом на основе майонеза и ворчестера",
    "composition": "Лосось х/к, тунец х/к, сельдь, майонез, соус ворчестер",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/zakuski-rybnaya-tarelka.png",
    "source": "menu.xlsx"
  },
  {
    "id": 3,
    "name": "ТАР-ТАР ПО-НАШЕМУ РЕЦЕПТУ",
    "category": "ЗАКУСКИ",
    "section": "",
    "description": "Нежный тар-тар из говяжьей вырезки по фирменному рецепту",
    "composition": "Говядина, перепелиное яйцо, чиабатта Мясная основа: вырезка, каперсы, маринованные огурцы, лук репчатый, соус ворчестер, чеснок свежий, кетчуп, петрушка, масло оливковое, соль, перец, горчица зернистая, табаско",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/zakuski-tar-tar-po-nashemu-receptu.png",
    "source": "menu.xlsx"
  },
  {
    "id": 4,
    "name": "МЯСНАЯ ТАРЕЛКА",
    "category": "ЗАКУСКИ",
    "section": "",
    "description": "Ассорти мясных деликатесов собственного производства",
    "composition": "Бекон, куриный орех, краковская колбаса, говядина, корейка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/zakuski-myasnaya-tarelka.png",
    "source": "menu.xlsx"
  },
  {
    "id": 5,
    "name": "СОЛЕНЬЯ И МАРИНАДЫ",
    "category": "ЗАКУСКИ",
    "section": "",
    "description": "Домашние соленья и маринованные овощи",
    "composition": "Маринованная капуста, огурцы, томаты, черемша, чеснок",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/zakuski-solenya-i-marinady.png",
    "source": "menu.xlsx"
  },
  {
    "id": 6,
    "name": "САЛО СОЛЕНОЕ",
    "category": "ЗАКУСКИ",
    "section": "",
    "description": "Домашнее солёное сало с бородинским хлебом и чесноком",
    "composition": "Сало соленое, бородинский хлеб, чеснок, зелёный лук, горчица, хрен",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/zakuski-salo-solenoe.png",
    "source": "menu.xlsx"
  },
  {
    "id": 7,
    "name": "СЕЛЬДЬ С КАРТОФЕЛЕМ",
    "category": "ЗАКУСКИ",
    "section": "",
    "description": "Классическая подача сельди с картофелем на выбор и маринованным красным луком",
    "composition": "Сельдь, картофель отварной или обжаренный на выбор, маринованный красный лук (яблочный уксус, растительное масло, соль, сахар)",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/zakuski-seld-s-kartofelem.png",
    "source": "menu.xlsx"
  },
  {
    "id": 8,
    "name": "ОЛИВКИ/МАСЛИНЫ",
    "category": "ЗАКУСКИ",
    "section": "",
    "description": "Крупные оливки и маслины каламон с косточкой",
    "composition": "Оливки, маслины",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/zakuski-olivki-masliny.png",
    "source": "menu.xlsx"
  },
  {
    "id": 9,
    "name": "СВЕЖИЕ ОВОЩИ",
    "category": "ЗАКУСКИ",
    "section": "",
    "description": "Ассорти из свежих сезонных овощей",
    "composition": "Огурцы, томаты, болгарский перец, черри",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/zakuski-svezhie-ovoschi.png",
    "source": "menu.xlsx"
  },
  {
    "id": 10,
    "name": "ВЯЛЕНЫЕ ТОМАТЫ",
    "category": "ЗАКУСКИ",
    "section": "",
    "description": "Томаты, высушенные на солнце и замаринованные в ароматном масле со специями.",
    "composition": "Вяленые томаты, специи, масло",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/zakuski-vyalenye-tomaty.png",
    "source": "menu.xlsx"
  },
  {
    "id": 11,
    "name": "ФИРМЕННЫЙ С ГОВЯДИНОЙ",
    "category": "САЛАТЫ",
    "section": "МЯСНЫЕ",
    "description": "Тёплый салат из нежной говяжьей вырезки с хрустящими деревенскими огурчиками, картофелем и пикантной заправкой",
    "composition": "Говядина вырезка, картофель отварной обжаренный, маринованные огурцы, красный лук, домашний майонез, соус кимчи",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-firmennyy-s-govyadinoy.png",
    "source": "menu.xlsx"
  },
  {
    "id": 12,
    "name": "С ГОВЯДИНОЙ И ДОР БЛЮ",
    "category": "САЛАТЫ",
    "section": "МЯСНЫЕ",
    "description": "Сочный тёплый салат с говядиной, перцем гриль и благородным сыром дор блю",
    "composition": "Говядина, болгарский перец гриль, томаты, красный лук, кинза, сыр дор блю, салатная заправка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-s-govyadinoy-i-dor-blyu.png",
    "source": "menu.xlsx"
  },
  {
    "id": 13,
    "name": "ЦЕЗАРЬ С КУРИНЫМ ФИЛЕ",
    "category": "САЛАТЫ",
    "section": "МЯСНЫЕ",
    "description": "Классический салат «Цезарь» с сочным куриным филе, приготовленным на гриле",
    "composition": "Куриная грудка, обжаренная на гриле, ромейн, айсберг, томаты черри, перепелиные яйца, гренки из белого хлеба, сыр пармезан, соус «Цезарь»",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-cezar-s-kurinym-file.png",
    "source": "menu.xlsx"
  },
  {
    "id": 14,
    "name": "ФЕРМЕРСКИЙ С КУРИЦЕЙ И КОЛБАСКАМИ",
    "category": "САЛАТЫ",
    "section": "МЯСНЫЕ",
    "description": "Тёплый салат с куриным бедром гриль, подкопчёнными колбасками и квашеной капустой под медово-горчичной заправкой",
    "composition": "Куриное филе бедра, домашняя колбаса, шампиньоны, картофель, квашеная капуста, красный лук, медово-горчичная заправка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-fermerskiy-s-kuricey-i-kolbaskami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 15,
    "name": "АМЕРИКАНСКИЙ КАРТОФЕЛЬНЫЙ",
    "category": "САЛАТЫ",
    "section": "МЯСНЫЕ",
    "description": "Домашний картофельный салат в американском стиле с колбасками собственного производства и пикантной заправкой",
    "composition": "Колбаса домашняя, картофель отварной, сельдерей, яйцо, болгарский перец, зеленый лук, домашний майонез, зернистая горчица, соус ворчестер",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-amerikanskiy-kartofelnyy.png",
    "source": "menu.xlsx"
  },
  {
    "id": 16,
    "name": "ФИГАРО",
    "category": "САЛАТЫ",
    "section": "РЫБНЫЕ",
    "description": "Нежный лосось гриль, сливочный сыр и свежие листья салата под медово-горчичной заправкой",
    "composition": "Лосось, креметта, ромейн, айсберг, руккола, черри, кунжут, медово-горчичная заправка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-figaro.png",
    "source": "menu.xlsx"
  },
  {
    "id": 17,
    "name": "ЦЕЗАРЬ С ЛОСОСЕМ",
    "category": "САЛАТЫ",
    "section": "РЫБНЫЕ",
    "description": "Лёгкий салат с лососем гриль, фирменным соусом «Цезарь» и нотками соуса песто",
    "composition": "Лосось, обжаренный на гриле, сверху смазывается соусом песто, ромейн, айсберг, томаты черри, перепелиные яйца, гренки из белого хлеба, сыр пармезан, соус «Цезарь», соус песто",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-cezar-s-lososem.png",
    "source": "menu.xlsx"
  },
  {
    "id": 18,
    "name": "ЦЕЗАРЬ С КРЕВЕТКАМИ",
    "category": "САЛАТЫ",
    "section": "РЫБНЫЕ",
    "description": "Хрустящий салат с обжаренными креветками и фирменным соусом «Цезарь»",
    "composition": "Обжаренные креветки, сверху смазываются соусом песто, ромейн, айсберг, томаты черри, перепелиные яйца, гренки из белого хлеба, сыр пармезан, соус «Цезарь», соус песто",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-cezar-s-krevetkami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 19,
    "name": "С ХРУСТЯЩИМИ КРЕВЕТКАМИ",
    "category": "САЛАТЫ",
    "section": "РЫБНЫЕ",
    "description": "Сочные овощи и хрустящие креветки под кунжутной заправкой",
    "composition": "Креветки в хрустящей панировке, ромейн, айсберг, руккола, огурцы, черри, красный лук, кунжут, кунжутная заправка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-s-hrustyaschimi-krevetkami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 20,
    "name": "САЛАТ С СЫРОМ ХАЛУМИ",
    "category": "САЛАТЫ",
    "section": "ОВОЩНЫЕ",
    "description": "Обжаренный на гриле сыр халлуми с томатами черри и сладкой грушей — идеальное сочетание свежести и нежности",
    "composition": "Халлуми, томаты черри, груша, кинза, красный лук, салатная заправка В зависимости от сезона груша в блюде может быть заменена на клубнику",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-salat-s-syrom-halumi.png",
    "source": "menu.xlsx"
  },
  {
    "id": 21,
    "name": "САЛАТ С ХРУСТЯЩИМИ БАКЛАЖАНАМИ",
    "category": "САЛАТЫ",
    "section": "ОВОЩНЫЕ",
    "description": "Тёплый салат с хрустящими баклажанами и сочной зеленью",
    "composition": "Баклажаны, запанированные и обжаренные во фритюре, ромейн, айсберг, руккола, томаты, красный лук, кинза, салатная заправка, соус сладкий чили",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-salat-s-hrustyaschimi-baklazhanami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 22,
    "name": "С ПЕЧЕНОЙ СВЕКЛОЙ И РУККОЛОЙ",
    "category": "САЛАТЫ",
    "section": "ОВОЩНЫЕ",
    "description": "Запечённая свёкла, хрустящие листья салата, сливочный сыр и чернослив под гранатовой заправкой",
    "composition": "Запеченая свёкла, ромейн, айсберг, руккола, креметта, чернослив, грецкий орех, гранатовая заправка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-s-pechenoy-svekloy-i-rukkoloy.png",
    "source": "menu.xlsx"
  },
  {
    "id": 23,
    "name": "СИНЬОРО ПОМАДОРО",
    "category": "САЛАТЫ",
    "section": "ОВОЩНЫЕ",
    "description": "Яркое сочетание трёх видов томатов со свежей зеленью и бальзамической заправкой",
    "composition": "Томаты, вяленые томаты, черри, ромейн, айсберг, руккола, бальзамическая заправка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-sinoro-pomadoro.png",
    "source": "menu.xlsx"
  },
  {
    "id": 24,
    "name": "ЗЕЛЕНЫЙ САЛАТ",
    "category": "САЛАТЫ",
    "section": "ОВОЩНЫЕ",
    "description": "Лёгкий и свежий салат из хрустящих листьев салата, свежих овощей и зелени с цитрусовой ноткой грейпфрута. Дополняется ароматным пармезаном, дроблёной фисташкой и освежающей лимонной заправкой",
    "composition": "Ромейн, Айсберг, руккола, кабачки, брокколи отварная, свежий огурец,, фасоль романо, дольки грейпфрута,сыр пармезан, дроблёная фисташка, салатная заправка, лимонная заправка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-zelenyy-salat.png",
    "source": "menu.xlsx"
  },
  {
    "id": 25,
    "name": "ГРЕЧЕСКИЙ",
    "category": "САЛАТЫ",
    "section": "ОВОЩНЫЕ",
    "description": "Классический греческий салат с сыром фета и итальянской заправкой",
    "composition": "Ромейн, айсберг, томаты, огурцы, болгарский перец, маслины, фета, красный лук, орегано и итальянская заправка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-grecheskiy.png",
    "source": "menu.xlsx"
  },
  {
    "id": 26,
    "name": "ЦЕЗАРЬ",
    "category": "САЛАТЫ",
    "section": "ОВОЩНЫЕ",
    "description": "Классический салат с хрустящими листьями салата, пармезаном и фирменным соусом «Цезарь»",
    "composition": "Ромейн, айсберг, томаты черри, перепелиные яйца, гренки из белого хлеба, сыр пармезан, соус «Цезарь»",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-cezar.png",
    "source": "menu.xlsx"
  },
  {
    "id": 27,
    "name": "ИЗ СЕЗОННЫХ ОВОЩЕЙ",
    "category": "САЛАТЫ",
    "section": "ОВОЩНЫЕ",
    "description": "Свежие овощи и зелень под ароматной имбирной заправкой",
    "composition": "Ромейн, айсберг, капуста краснокачанная, свежая морковь, стручковая фасоль, болгарский перец, яйцо, томаты, имбирная заправка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/salaty-iz-sezonnyh-ovoschey.png",
    "source": "menu.xlsx"
  },
  {
    "id": 28,
    "name": "ДАРЫ МОРЯ",
    "category": "СУПЫ",
    "section": "",
    "description": "Насыщенный суп с морепродуктами и лососем в ароматном томатном бульоне",
    "composition": "Куриный бульон, лосось, мидии, креветки, томаты конкассе, крем из сушёных томатов, чеснок, зеленый лук, петрушка, укроп",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/supy-dary-morya.png",
    "source": "menu.xlsx"
  },
  {
    "id": 29,
    "name": "ТОМ ЯМ",
    "category": "СУПЫ",
    "section": "",
    "description": "Острый азиатский суп на кокосовых сливках с морепродуктами",
    "composition": "Бульон (куриный бульон, паста том ям, имбирь, цедра лайма, сок лайма, кокосовые сливки), креветки, мидии в панцире, филе мидий, черри, лайм, кинза, подается с рисом",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/supy-tom-yam.png",
    "source": "menu.xlsx"
  },
  {
    "id": 30,
    "name": "БОРЩ С КОПЧЕНОСТЯМИ",
    "category": "СУПЫ",
    "section": "",
    "description": "Густой, наваристый борщ, приготовленный на мясном бульоне, со сметаной, зеленью и свиным ребрышком",
    "composition": "Мясном бульон (готовится на свиных ребрышках с кореньями), мясо со свиных ребрышек, капуста белокочанная, лук репчатый, морковь, свекла, томатная паста, соль, перец, сахар, уксус, зеленый лук, петрушка укроп. Подается со сметаной и свиным ребрышком",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/supy-borsch-s-kopchenostyami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 31,
    "name": "УХА ИЗ БЕЛОЙ РЫБЫ",
    "category": "СУПЫ",
    "section": "",
    "description": "Лёгкая ароматная уха из белой рыбы с зеленью",
    "composition": "Куриный бульон, треска, зеленый лук, петрушка, укроп",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/supy-uha-iz-beloy-ryby.png",
    "source": "menu.xlsx"
  },
  {
    "id": 32,
    "name": "БУЛЬОН КУРИНЫЙ",
    "category": "СУПЫ",
    "section": "",
    "description": "Наваристый куриный бульон с лапшой собственного производства, отварным куриным яйцом, гренками и зеленью",
    "composition": "Куриный бульон (курица, морковь, репчатый лук, соль и черный перец горошком), лапша собственного производства (мягкие сорта пшеничной муки типа 00, яичный меланж, яичный желток, соль), отварное куриное яйцо, гренки, зеленый лук, петрушка, укроп",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/supy-bulon-kurinyy.png",
    "source": "menu.xlsx"
  },
  {
    "id": 33,
    "name": "ПОРТЕРХАУС тонкий край, вырезка и т-образная кость",
    "category": "СТЕЙКИ",
    "section": "Все стейки подаются без гарнира и без соуса (кроме Филе Миньон и Скерт-стейка), поэтому при приёме заказа необходимо обязательно уточнить желаемую прожарку и предложить гостю гарнир и соус",
    "description": "Королевский стейк на Т-образной кости, сочетающий нежность вырезки и насыщенный вкус стриплойна. Благодаря высокой мраморности мясо остаётся сочным и ароматным. Рекомендуемая прожарка: Medium Rare или Medium",
    "composition": "Отруб: Short Loin (начало отруба) Состав стейка: Стриплойн Филе миньон Т-образная кость Особенности: Самый крупный стейк в разделе Содержит сразу два разных вида мяса Самая большая часть вырезки среди всех стейков на кости Кость усиливает вкус и аромат Вкус: Стриплойн — насыщенный мясной Вырезка — нежная и мягкая Прожарка: Рекомендуется Medium Rare / Medium При прожарке ориентироваться на желаемую степень для вырезки",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/steyki-porterhaus-tonkiy-kray-vyrezka-i-t-obraznaya-kost.png",
    "source": "menu.xlsx"
  },
  {
    "id": 34,
    "name": "РИБАЙ толстый край",
    "category": "СТЕЙКИ",
    "section": "Все стейки подаются без гарнира и без соуса (кроме Филе Миньон и Скерт-стейка), поэтому при приёме заказа необходимо обязательно уточнить желаемую прожарку и предложить гостю гарнир и соус",
    "description": "Классический стейк из толстого края с высокой степенью мраморности и характерным жировым «глазком». При приготовлении жировые прослойки равномерно тают, делая мясо исключительно сочным, мягким и ароматным. Один из самых популярных стейков благодаря насыщенному вкусу и нежной текстуре. Рекомендуемая прожарка: Medium, Medium Well",
    "composition": "Отруб: Толстый край (Rib Eye) Состав стейка: Мраморная говядина Жировой «глазок» Особенности: Самый популярный стейк в меню Высокая мраморность Максимальная сочность Универсальный выбор для первого знакомства со стейками Вкус: Насыщенный Сливочно-мясной Очень сочный Прожарка: Medium Допустимо Medium Rare",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/steyki-ribay-tolstyy-kray.png",
    "source": "menu.xlsx"
  },
  {
    "id": 35,
    "name": "СТРИПЛОЙН тонкий край",
    "category": "СТЕЙКИ",
    "section": "Все стейки подаются без гарнира и без соуса (кроме Филе Миньон и Скерт-стейка), поэтому при приёме заказа необходимо обязательно уточнить желаемую прожарку и предложить гостю гарнир и соус",
    "description": "Классический стейк из тонкого края с характерной жировой полосой по краю. Более постный по сравнению с рибаем, но при этом обладает насыщенным мясным вкусом и хорошей мраморностью. Известен также как New York Steak и считается одним из самых сбалансированных стейков. Рекомендуемая прожарка: Medium Rare, Medium",
    "composition": "Отруб: Тонкий край (Striploin) Особенности: Также известен как New York Steak Имеет характерную жировую полоску по краю Более постный, чем Рибай Один из самых популярных классических стейков Вкус: Ярко выраженный мясной Более плотная структура Прожарка: Medium Rare / Medium",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/steyki-striployn-tonkiy-kray.png",
    "source": "menu.xlsx"
  },
  {
    "id": 36,
    "name": "СКЕРТ-СТЕЙК тонкая диафрагма",
    "category": "СТЕЙКИ",
    "section": "Все стейки подаются без гарнира и без соуса (кроме Филе Миньон и Скерт-стейка), поэтому при приёме заказа необходимо обязательно уточнить желаемую прожарку и предложить гостю гарнир и соус",
    "description": "Альтернативный стейк из тонкой диафрагмы с крупными мясными волокнами и ярко выраженным вкусом говядины. Благодаря своей структуре сохраняет сочность даже при более высокой степени прожарки. Ценится любителями насыщенного, «мясного» вкуса и считается одним из самых характерных альтернативных стейков. Подаётся с насыщенным мясным соусом собственного приготовления, который подчёркивает вкус премиальной говядины Рекомендуемая прожарка: Medium, Medium Well",
    "composition": "Отруб: Тонкая диафрагма Категория: Альтернативный стейк Особенности: Крупные мясные волокна Один из самых насыщенных по вкусу стейков Исторически считался любимым стейком мясников Сохраняет сочность даже при высокой прожарке Вкус: Максимально мясной Яркий и насыщенный Прожарка: Medium / Medium Well",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/steyki-skert-steyk-tonkaya-diafragma.png",
    "source": "menu.xlsx"
  },
  {
    "id": 37,
    "name": "ФИЛЕ МИНЬОН вырезка",
    "category": "СТЕЙКИ",
    "section": "Все стейки подаются без гарнира и без соуса (кроме Филе Миньон и Скерт-стейка), поэтому при приёме заказа необходимо обязательно уточнить желаемую прожарку и предложить гостю гарнир и соус",
    "description": "Самый нежный стейк из центральной части говяжьей вырезки. Обладает мягкой текстурой и деликатным мясным вкусом. Подаётся с насыщенным мясным соусом собственного приготовления, который подчёркивает вкус премиальной говядины Рекомендуемая прожарка: Medium Rare / Medium",
    "composition": "Отруб: Центральная часть говяжьей вырезки Особенности: Самый нежный стейк в меню Практически не содержит внутренних жировых прослоек Вырезка не участвует в движении животного, поэтому мышечные волокна остаются максимально мягкими Ценится за текстуру, а не за выраженную мраморность Вкус: Нежный и деликатный Менее насыщенный, чем у Рибая или Стриплойна Хорошо сочетается с мясным соусом Прожарка: Medium Rare / Medium",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/steyki-file-minon-vyrezka.png",
    "source": "menu.xlsx"
  },
  {
    "id": 38,
    "name": "МЕДАЛЬОНЫ ИЗ ГОВЯДИНЫ с салатом из свежих овощей",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "ГОВЯДИНА",
    "description": "Сочные медальоны из говяжьей вырезки с овощным салатом и насыщенным мясным соусом",
    "composition": "Говядина вырезка, овощной салат (ромейн, айсберг, свежий огурец, помидор, перец болгарский, заправка итальянская), мясной соус",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-medalony-iz-govyadiny-s-salatom-iz-svezhih-ovoschey.png",
    "source": "menu.xlsx"
  },
  {
    "id": 39,
    "name": "БЕФСТРОГАНОВ с картофельным пюре",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "ГОВЯДИНА",
    "description": "Классический бефстроганов из мраморной говядины в нежном сливочном соусе с картофельным пюре",
    "composition": "Филе мраморной говядины, сливки, репчатый лук, картофельное пюре, сливочное масло, украшается черри и петрушкой",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-befstroganov-s-kartofelnym-pyure.png",
    "source": "menu.xlsx"
  },
  {
    "id": 40,
    "name": "ГОВЯЖЬЯ КОТЛЕТА С ГРИБНЫМ СОУСОМ и картофельным пюре",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "ГОВЯДИНА",
    "description": "Сочная говяжья котлета, обжаренная на гриле, с картофельным пюре и грибным соусом",
    "composition": "Говяжья котлета, приготовленная из говядины зернового откорма, картофельное пюре, грибной соус, украшается петрушкой",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-govyazhya-kotleta-s-gribnym-sousom-i-kartofelnym-pyure.png",
    "source": "menu.xlsx"
  },
  {
    "id": 41,
    "name": "ГОВЯЖЬИ ЩЕЧКИ с картофельным пюре",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "ГОВЯДИНА",
    "description": "Томлёные говяжьи щёчки с нежным картофельным пюре",
    "composition": "Томлёные щечки (предварительно томятся с морковью, репчатым луком, тимьяном, чесноком, сахаром в томатной пасте), картофельное пюре, украшается зеленым луком",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-govyazhi-schechki-s-kartofelnym-pyure.png",
    "source": "menu.xlsx"
  },
  {
    "id": 42,
    "name": "ЯЗЫК ГОВЯЖИЙ с картофельным пюре",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "ГОВЯДИНА",
    "description": "Отварной язык в кисло-сладкой глазури с картофельным пюре и грибным соусом",
    "composition": "Отварной говяжий язык, картофельное пюре, глазурь из кисло-сладкого и устричного соусов, грибной соус, украшается зеленым луком",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-yazyk-govyazhiy-s-kartofelnym-pyure.png",
    "source": "menu.xlsx"
  },
  {
    "id": 43,
    "name": "СЕРДЦЕ БЫКА В СЛИВОЧНО-ГРИБНОМ СОУСЕ",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "ГОВЯДИНА",
    "description": "Томлёное сердце быка с белыми грибами в сливочном соусе",
    "composition": "Сердце говяжье отварное, обжаренный лук, чеснок, сливки, грибной соус, украшается миксом зелени (зеленый лук, укроп, петрушка)",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-serdce-byka-v-slivochno-gribnom-souse.png",
    "source": "menu.xlsx"
  },
  {
    "id": 44,
    "name": "ЩЕЧКИ СВИНЫЕ",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "СВИНИНА",
    "description": "Нежные томлённые свиные щечки, с насыщенным мясным соусом и хрустящей чиабаттой",
    "composition": "Свиные щёчки, соль, перец, чиабатта, мясной соус, украшается зеленым луком",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-schechki-svinye.png",
    "source": "menu.xlsx"
  },
  {
    "id": 45,
    "name": "ШМАТ МЯСА",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "СВИНИНА",
    "description": "Сочный свиной стейк на гриле с фирменным соусом",
    "composition": "Свинина (шея), фирменный соус",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-shmat-myasa.png",
    "source": "menu.xlsx"
  },
  {
    "id": 46,
    "name": "ШАШЛЫК ИЗ СВИНИНЫ с маринованным луком и шашлычным соусом",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "СВИНИНА",
    "description": "Сочный шашлык из свиной шеи с маринованным луком",
    "composition": "Свинина (шея), замаринованная в специях (соль, перец, сахар, орегано, лимонный фреш), маринованный красный лук (яблочный уксус, растительное масло, соль, сахар) и шашлычный соус",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-shashlyk-iz-svininy-s-marinovannym-lukom-i-shashlychnym.png",
    "source": "menu.xlsx"
  },
  {
    "id": 47,
    "name": "СВИНИНА НА ГРИЛЕ с картофельными дольками",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "СВИНИНА",
    "description": "Ароматная свинина гриль с картофельными дольками и фирменным соусом",
    "composition": "Свинина (карбонат), картофельные дольки, фирменный соус",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-svinina-na-grile-s-kartofelnymi-dolkami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 48,
    "name": "ФИЛЕ ЦЫПЛЕНКА в сливочно-грибном соусе",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "ПТИЦА",
    "description": "Куриное филе в сливочно-грибном соусе с песто и нежное картофельное пюре со сливочным маслом и мясным соусом",
    "composition": "Филе куриной грудки, белые грибы, шампиньоны, сливки, соус песто, картофельное пюре, масло сливочное, мясной соус",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-file-cyplenka-v-slivochno-gribnom-souse.png",
    "source": "menu.xlsx"
  },
  {
    "id": 49,
    "name": "КУРИНАЯ ГРУДКА с картофельными дольками",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "ПТИЦА",
    "description": "Сочная куриная грудка с картофельными дольками и фирменным соусом",
    "composition": "Филе куриной грудки замаринованное в специях (перцы, травы, соль), картофельные дольки, фирменный соус",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-kurinaya-grudka-s-kartofelnymi-dolkami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 50,
    "name": "ФИЛЕ БЕДРА с овощами на гриле",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "ПТИЦА",
    "description": "Филе бедра, приготовленное на гриле, с овощами гриль и шашлычным соусом",
    "composition": "Филе куриного бедра, овощи гриль, шашлычный соус, чесночно-укропная заправка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-file-bedra-s-ovoschami-na-grile.png",
    "source": "menu.xlsx"
  },
  {
    "id": 51,
    "name": "УТИНАЯ НОЖКА с картофельным пюре",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "ПТИЦА",
    "description": "Томлёная утиная ножка конфи с картофельным пюре бальзамической заправкой",
    "composition": "Утиная ножка приготовленная методом конфи (длительное томление на низкой температуре) со специями (соль, перец, 5 специй, гвоздика, корица, бадьян, перец, фенхель, сухой чеснок ), картофельное пюре, сливочное масло, украшается зеленым луком",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-utinaya-nozhka-s-kartofelnym-pyure.png",
    "source": "menu.xlsx"
  },
  {
    "id": 52,
    "name": "ГРИЛЬ ЧИЗ",
    "category": "МЯСНЫЕ БЛЮДА",
    "section": "СЫР",
    "description": "Стейк из сыра халуми с вишневым соусом",
    "composition": "Халуми, вишневый соус",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/myasnye-blyuda-gril-chiz.png",
    "source": "menu.xlsx"
  },
  {
    "id": 53,
    "name": "СТЕЙК ИЗ ТУНЦА с хрустящим салатом",
    "category": "РЫБА И МОРЕПРОДУКТЫ",
    "section": "РЫБА",
    "description": "Стейк из тунца с крем-бальзамиком, подается с легким салатным миксом и пикантной имбирной заправкой ОБЯЗАТЕЛЬНО УТОЧНИТЬ ПРОЖАРКУ",
    "composition": "Тунец, крем-бальзамик, салат (ромейн, айсберг, руккола, черри, томаты вяленные, перец болгарский, каперсы, кедровый орех, имбирная заправка)",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/ryba-i-moreprodukty-steyk-iz-tunca-s-hrustyaschim-salatom.png",
    "source": "menu.xlsx"
  },
  {
    "id": 54,
    "name": "ЛОСОСЬ НА ГРИЛЕ с овощами на гриле",
    "category": "РЫБА И МОРЕПРОДУКТЫ",
    "section": "РЫБА",
    "description": "Сочный стейк из лосося, приготовленный на гриле, подается с ароматными овощами гриль и долькой лимона",
    "composition": "Лосось, овощи гриль, песто, лимон",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/ryba-i-moreprodukty-losos-na-grile-s-ovoschami-na-grile.png",
    "source": "menu.xlsx"
  },
  {
    "id": 55,
    "name": "ТРЕСКА ПОД ПОЛЬСКИМ СОУСОМ с картофельным пюре",
    "category": "РЫБА И МОРЕПРОДУКТЫ",
    "section": "РЫБА",
    "description": "Нежное филе трески под классическим польским соусом на основе сливочного масла и яйца, подается с картофельным пюре",
    "composition": "Филе трески, пюре картофельное, яйцо куриное отварное, масло сливочное, зелень",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/ryba-i-moreprodukty-treska-pod-polskim-sousom-s-kartofelnym-pyure.png",
    "source": "menu.xlsx"
  },
  {
    "id": 56,
    "name": "БЕЛАЯ РЫБА В ХРУСТЯЩЕЙ ПАНИРОВКЕ с салатом из свежих овощей",
    "category": "РЫБА И МОРЕПРОДУКТЫ",
    "section": "РЫБА",
    "description": "Филе белой рыбы в золотистой хрустящей панировке со свежими овощами и легкой кунжутной заправкой",
    "composition": "Филе трески, панировка (мука, крахмал, специи), салат (ромейн, айсберг, руккола, черри, морковь, редис, сельдерей, кунжутная заправка)",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/ryba-i-moreprodukty-belaya-ryba-v-hrustyaschey-panirovke-s-salatom-iz-.png",
    "source": "menu.xlsx"
  },
  {
    "id": 57,
    "name": "ФИЛЕ КОРОЛЕВСКИХ КРЕВЕТОК с ореховым соусом",
    "category": "РЫБА И МОРЕПРОДУКТЫ",
    "section": "МОРЕПРОДУКТЫ",
    "description": "Крупные королевские креветки, маринованые в оливковом масле с соком лимона и ароматными травами , подаются с ореховым соусом",
    "composition": "Королевские креветки, оливковое масло, сок лимона, тимьян, чеснок, ореховый соус",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/ryba-i-moreprodukty-file-korolevskih-krevetok-s-orehovym-sousom.png",
    "source": "menu.xlsx"
  },
  {
    "id": 58,
    "name": "МИДИИ В СОУСЕ БЛЮ-ЧИЗ",
    "category": "РЫБА И МОРЕПРОДУКТЫ",
    "section": "МОРЕПРОДУКТЫ",
    "description": "Мидии в панцире в нежном соусе блю-чиз, подаются с хрустящим багетом для соуса",
    "composition": "Мидии в панцире, лук репчатый, сливки, сыр дор блю, багет",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/ryba-i-moreprodukty-midii-v-souse-blyu-chiz.png",
    "source": "menu.xlsx"
  },
  {
    "id": 59,
    "name": "КРЕВЕТКИ И РИС",
    "category": "РЫБА И МОРЕПРОДУКТЫ",
    "section": "МОРЕПРОДУКТЫ",
    "description": "Сочные креветки с рассыпчатым рисом, сливочным маслом, чесноком, зеленым луком и черным перцем",
    "composition": "Креветки, рис отварной, сливочное масло, соль, перец, чеснок, зелёный лук",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/ryba-i-moreprodukty-krevetki-i-ris.png",
    "source": "menu.xlsx"
  },
  {
    "id": 60,
    "name": "СКОВОРОДА МИДИЙ И КРЕВЕТОК",
    "category": "РЫБА И МОРЕПРОДУКТЫ",
    "section": "МОРЕПРОДУКТЫ",
    "description": "Мидии и креветки, томленные в насыщенном томатном соусе с чесноком, перцем чили и свежей зеленью. Подаются прямо на горячей сковороде",
    "composition": "Филе мидий, креветки, томатный соус, чеснок, чили, петрушка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/ryba-i-moreprodukty-skovoroda-midiy-i-krevetok.png",
    "source": "menu.xlsx"
  },
  {
    "id": 61,
    "name": "С БРУСНИКОЙ И МРАМОРНОЙ ГОВЯДИНОЙ",
    "category": "БУРГЕРЫ",
    "section": "",
    "description": "Авторский бургер с ягодным соусом и мраморной говядиной",
    "composition": "Булочка для бургера, говяжья котлета, тушеный репчатый лук, яблоко, брусничный соус, соус устричный майонез",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/burgery-s-brusnikoy-i-mramornoy-govyadinoy.png",
    "source": "menu.xlsx"
  },
  {
    "id": 62,
    "name": "БИФ",
    "category": "БУРГЕРЫ",
    "section": "",
    "description": "Классический бургер с говяжьей котлетой и сыром",
    "composition": "Булочка для бургера, говяжья котлета, сыр чеддер, салат айсберг, помидор, острый перец халапеньо, лук красный, соус гриль",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/burgery-bif.png",
    "source": "menu.xlsx"
  },
  {
    "id": 63,
    "name": "КАБАН БУРГЕР",
    "category": "БУРГЕРЫ",
    "section": "",
    "description": "Сочный бургер со свиной котлетой, сыром чеддер и шашлычным соусом",
    "composition": "Булочка для бургера, свиная котлета, сыр чеддер, салат айсберг, маринованный красный лук (яблочный уксус, растительное масло, соль, сахар), соус",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/burgery-kaban-burger.png",
    "source": "menu.xlsx"
  },
  {
    "id": 64,
    "name": "СВИНЫЕ РЕБРА ГРИЛЬ",
    "category": "РЕБРА",
    "section": "",
    "description": "Большая порция классических рёбер гриль с горчицей, кетчупом и квашенной капустой",
    "composition": "Свиные ребра замаринованные в специях (орегано, соль, перец, масло), горчица, кетчуп, квашенная капуста",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/rebra-svinye-rebra-gril.png",
    "source": "menu.xlsx"
  },
  {
    "id": 65,
    "name": "РЕБРА BBQ",
    "category": "РЕБРА",
    "section": "",
    "description": "Свиные ребра длительного томления, глазированные соусом барбекю",
    "composition": "Свиные ребра длительного томления, соус барбекю. От классических ребер отличаются большей мясистостью и жирностью.",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/rebra-rebra-bbq.png",
    "source": "menu.xlsx"
  },
  {
    "id": 66,
    "name": "РЕБРЫШКИ ПО-СЕУЛЬСКИ",
    "category": "РЕБРА",
    "section": "",
    "description": "Томлёные рёбра в пикантном сеульском соусе с арахисом",
    "composition": "Свиные томленые ребра, приготовленные на гриле с сеульским соусом с арахисом, зеленый лук",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/rebra-rebryshki-po-seulski.png",
    "source": "menu.xlsx"
  },
  {
    "id": 67,
    "name": "ПЮРЕ классическое",
    "category": "ГАРНИРЫ",
    "section": "ФИРМЕННЫЕ ПЮРЕ",
    "description": "Нежное картофельное пюре со сливочным маслом и сливками",
    "composition": "Картофель, сливки, сливочное масло, соль",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/garniry-pyure-klassicheskoe.png",
    "source": "menu.xlsx"
  },
  {
    "id": 68,
    "name": "БРОККОЛИ С ПАРМЕЗАНОМ",
    "category": "ГАРНИРЫ",
    "section": "",
    "description": "Брокколи с чесноком, лимонной заправкой и пармезаном",
    "composition": "Брокколи, чеснок, соль, пармезан, лимонная заправка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/garniry-brokkoli-s-parmezanom.png",
    "source": "menu.xlsx"
  },
  {
    "id": 69,
    "name": "КАРТОФЕЛЬ ФРИ",
    "category": "ГАРНИРЫ",
    "section": "",
    "description": "Хрустящий картофель фри с золотистой корочкой, подается с паприкой и кетчупом",
    "composition": "Картофель фри, соль, паприка, подсолнечное масло, кетчуп",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/garniry-kartofel-fri.png",
    "source": "menu.xlsx"
  },
  {
    "id": 70,
    "name": "КАРТОФЕЛЬНЫЕ ДОЛЬКИ",
    "category": "ГАРНИРЫ",
    "section": "",
    "description": "Ароматные картофельные дольки с румяной корочкой и нежной серединой, подаются с кетчупом",
    "composition": "Картофельные дольки, соль, подсолнечное масло, кетчуп",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/garniry-kartofelnye-dolki.png",
    "source": "menu.xlsx"
  },
  {
    "id": 71,
    "name": "ОВОЩИ ГРИЛЬ",
    "category": "ГАРНИРЫ",
    "section": "",
    "description": "Ассорти овощей, приготовленных на гриле, с лёгким ароматом дымка и соусом песто",
    "composition": "Болгарский перец, цукини, баклажаны, шампиньоны, соль, перец, подсолнечное масло, соус песто",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/garniry-ovoschi-gril.png",
    "source": "menu.xlsx"
  },
  {
    "id": 72,
    "name": "ЦУКИНИ ГРИЛЬ",
    "category": "ГАРНИРЫ",
    "section": "",
    "description": "Нежные цукини, обжаренные на гриле с чесноком и специями, подаются со сметаной",
    "composition": "Цукини, чеснок, соль, перец, подсолнечное масло, сметана",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/garniry-cukini-gril.png",
    "source": "menu.xlsx"
  },
  {
    "id": 73,
    "name": "ШАМПИНЬОНЫ ГРИЛЬ",
    "category": "ГАРНИРЫ",
    "section": "",
    "description": "Ароматные шампиньоны гриль со сливочным маслом и чесноком",
    "composition": "Шампиньоны, черри, соль, перец, чеснок, петрушка, сливочное масло, бальзамический уксус",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/garniry-shampinony-gril.png",
    "source": "menu.xlsx"
  },
  {
    "id": 74,
    "name": "КАРТОФЕЛЬ С ГРИБАМИ",
    "category": "ГАРНИРЫ",
    "section": "",
    "description": "Домашний картофель с грибами и зеленью",
    "composition": "Отварной обжаренный картофель, шампиньоны, укроп, чеснок, соль",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/garniry-kartofel-s-gribami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 75,
    "name": "ГРЕЧКА С БЕЛЫМИ ГРИБАМИ",
    "category": "ГАРНИРЫ",
    "section": "",
    "description": "Ароматная гречка с овощами и белыми грибами и маринованным огурцом",
    "composition": "Гречка, белые грибы, лук, морковь, соль, сливочное масло, маринованный огурец",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/garniry-grechka-s-belymi-gribami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 76,
    "name": "РИС",
    "category": "ГАРНИРЫ",
    "section": "",
    "description": "Рассыпчатый отварной рис с вологодским сливочным маслом",
    "composition": "Рис отварной, сливочное масло, соль",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/garniry-ris.png",
    "source": "menu.xlsx"
  },
  {
    "id": 77,
    "name": "С МОРЕПРОДУКТАМИ",
    "category": "ПАСТЫ",
    "section": "",
    "description": "Фирменная паста с мидиями и креветками в нежном сливочном соусе с добавлением белого вина, которое подчёркивает вкус морепродуктов",
    "composition": "Спагетти, креветки, филе мидий, черри, чили, чеснок, белое вино, сливки, петрушка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/pasty-s-moreproduktami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 78,
    "name": "С КРЕВЕТКАМИ",
    "category": "ПАСТЫ",
    "section": "",
    "description": "Тигровые креветки, обжаренные с чесноком и перцем чили, подаются со спагетти в ароматном соусе из сушёных томатов",
    "composition": "Спагетти, креветки, сухари панко, петрушка, соус из томатов (базилик, анчоусы, томаты сушеные, чеснок, чили, оливковое масло)",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/pasty-s-krevetkami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 79,
    "name": "4 СЫРА",
    "category": "ПАСТЫ",
    "section": "",
    "description": "Нежная паста в сливочном соусе с четырьмя видами сыра, каждый из которых раскрывает собственный характер и аромат",
    "composition": "Спагетти, Моцарелла, Пармезан, Чедер, Дор блю, сливки, кедровый орех",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/pasty-4-syra.png",
    "source": "menu.xlsx"
  },
  {
    "id": 80,
    "name": "КАРБОНАРА",
    "category": "ПАСТЫ",
    "section": "",
    "description": "Классическая итальянская паста с обжаренным беконом, нежным сливочным соусом и выдержанным пармезаном",
    "composition": "Спагетти, бекон собственного производства, куриный бульон, сливки, сыр пармезан, яичный желток, черный молотый перец",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/pasty-karbonara.png",
    "source": "menu.xlsx"
  },
  {
    "id": 81,
    "name": "С КУРИЦЕЙ И БЕЛЫМИ ГРИБАМИ",
    "category": "ПАСТЫ",
    "section": "",
    "description": "Спагетти с куриным филе и ароматными белыми грибами и шампиньонами в сочетании с соусом песто",
    "composition": "Спагетти, куриная грудка, репчатый лук, шампиньоны, белые грибы, черри, пармезан, песто",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/pasty-s-kuricey-i-belymi-gribami.png",
    "source": "menu.xlsx"
  },
  {
    "id": 82,
    "name": "БОЛОНЬЕЗЕ",
    "category": "ПАСТЫ",
    "section": "",
    "description": "Фетучини с густым мясным соусом из говядины, томатов и чеснока, приготовленным по мотивам классического итальянского рецепта",
    "composition": "Феттучини, соус болоньезе (рубленная говядина, репчатый лук, чеснок, орегано, протертые томаты), пармезан",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/pasty-boloneze.png",
    "source": "menu.xlsx"
  },
  {
    "id": 83,
    "name": "ФРУКТЫ НА ГРИЛЕ",
    "category": "ДЕСЕРТЫ НА ГРИЛЕ",
    "section": "",
    "description": "Карамелизированные фрукты, обжаренные на гриле, подаются с шариком мороженого и взбитыми сливками",
    "composition": "Яблоко, груша, банан, лимонный фреш, тимьян, сахар, мороженое, взбитые сливки",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/deserty-na-grile-fruktf-na-grile.png",
    "source": "menu.xlsx"
  },
  {
    "id": 84,
    "name": "ГРУША СО СЛИВОЧНЫМ СЫРОМ",
    "category": "ДЕСЕРТЫ НА ГРИЛЕ",
    "section": "",
    "description": "Груша гриль с нежным сливочным сыром и бальзамическим кремом",
    "composition": "Груша, творожный сыр, оливковое масло, тимьян, бальзамический крем",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/deserty-na-grile-grusha-so-slivochnym-syrom.png",
    "source": "menu.xlsx"
  },
  {
    "id": 85,
    "name": "ГРУША С КАРАМЕЛЬЮ И МОРОЖЕНЫМ",
    "category": "ДЕСЕРТЫ НА ГРИЛЕ",
    "section": "",
    "description": "Груша гриль с карамелью, попкорном, ванильным мороженым и взбитыми сливками",
    "composition": "Груша, оливковое масло, тимьян, мороженое, взбитые сливки, попкорн, карамельный топинг",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/deserty-na-grile-grusha-s-karamelyu-i-morozhenym.png",
    "source": "menu.xlsx"
  },
  {
    "id": 86,
    "name": "ОЛИВКОВОЕ МАСЛО",
    "category": "СОУСЫ",
    "section": "",
    "description": "Натуральное оливковое масло первого холодного отжима с мягким вкусом и характерным ароматом",
    "composition": "Оливковое масло Extra Virgin",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-olivkovoe-maslo.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 87,
    "name": "ДОМАШНИЙ МАЙОНЕЗ",
    "category": "СОУСЫ",
    "section": "",
    "description": "Нежный домашний майонез собственного производства с сбалансированным вкусом",
    "composition": "Горчица дижонская, уксус столовый 9%, соль, сахар, масло подсолнечное, яичный желток",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-domashniy-mayonez.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 88,
    "name": "СМЕТАНА",
    "category": "СОУСЫ",
    "section": "",
    "description": "Вологодская сметана с густой текстурой",
    "composition": "Вологодская сметана от производителя",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-smetana.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 89,
    "name": "ХРЕН",
    "category": "СОУСЫ",
    "section": "",
    "description": "Острый соус с ярким характерным вкусом",
    "composition": "На основе натурального хрена",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-hren.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 90,
    "name": "ГОРЧИЦА",
    "category": "СОУСЫ",
    "section": "",
    "description": "Пикантная горчица с насыщенным вкусом и умеренной остротой",
    "composition": "Горчица от производителя",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-gorchica.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 91,
    "name": "КЕТЧУП",
    "category": "СОУСЫ",
    "section": "",
    "description": "Классический томатный соус с насыщенным вкусом спелых томатов",
    "composition": "Томатный кетчуп производственный",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-ketchup.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 92,
    "name": "СОУС БАРБЕКЮ",
    "category": "СОУСЫ",
    "section": "",
    "description": "Насыщенный соус собственного производства с характерным сладко-копченым вкусом и пряными нотками",
    "composition": "Оригинальный рецепт собственного производства",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-sous-barbekyu.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 93,
    "name": "СЫРНЫЙ СОУС",
    "category": "СОУСЫ",
    "section": "",
    "description": "Нежный сливочно-сырный соус с бархатистой текстурой",
    "composition": "Сырный соус производственный",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-syrnyy-sous.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 94,
    "name": "ШАШЛЫЧНЫЙ СОУС",
    "category": "СОУСЫ",
    "section": "",
    "description": "Свежий томатный соус собственного производства с ароматной зеленью и красным луком",
    "composition": "Кетчуп, красный лук, кинза, базилик, петрушка",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-shashlychnyy-sous.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 95,
    "name": "МЯСНОЙ СОУС",
    "category": "СОУСЫ",
    "section": "",
    "description": "Насыщенный мясной соус длительного приготовления собственного производства с овощами, специями и красным вином",
    "composition": "Говяжьи кости, лук шалот, лук порей, репчатый лук, морковь, корень петрушки, лавровый лист, черный и душистый перец, томатный соус, красное вино",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-myasnoy-sous.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 96,
    "name": "ФИРМЕННЫЙ СОУС",
    "category": "СОУСЫ",
    "section": "",
    "description": "Яркий томатный соус с вялеными томатами, пармезаном и легкой пикантностью перца чили собственного производства",
    "composition": "Соус Mutti, вяленые томаты, томаты в собственном соку, оливковое масло, масло вяленых томатов, перец чили, чеснок, соль, черный перец, соус барбекю, пармезан",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-firmennyy-sous.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 97,
    "name": "СОУС БАЗИЛИКОВЫЙ ПЕСТО",
    "category": "СОУСЫ",
    "section": "",
    "description": "Ароматный соус собственного производства на основе базилика, оливкового масла и пармезана",
    "composition": "Базилик, петрушка, чеснок, соль, перец, оливковое масло, кедровый орех, пармезан",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-sous-bazilikovyy-pesto.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 98,
    "name": "ОРЕХОВЫЙ СОУС",
    "category": "СОУСЫ",
    "section": "",
    "description": "Нежный соус с насыщенным ореховым вкусом и кремовой текстурой",
    "composition": "Ореховый соус производственный",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-orehovyy-sous.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 99,
    "name": "МЕД",
    "category": "СОУСЫ",
    "section": "",
    "description": "Натуральный цветочный мед с мягким ароматом и сладким послевкусием",
    "composition": "Цветочный мед производственный",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-med.png",
    "source": "sauce.xlsx"
  },
  {
    "id": 100,
    "name": "ВИШНЕВЫЙ СОУС",
    "category": "СОУСЫ",
    "section": "",
    "description": "Ароматный ягодный соус с кусочками вишни и легкими нотками коньяка",
    "composition": "Ягоды вишни, сахар, вода, коньяк",
    "price": null,
    "priceLabel": "Цена в ресторане",
    "image": "../image/generated/catalog/sousy-vishnevyy-sous.png",
    "source": "sauce.xlsx"
  }
];

const state = {
  activeCategory: "СТЕЙКИ",
};

const els = {
  categories: document.querySelector("[data-categories]"),
  products: document.querySelector("[data-products]"),
  galleryCarousel: document.querySelector("[data-gallery-carousel]"),
  galleryTrack: document.querySelector("[data-gallery-track]"),
  galleryPrev: document.querySelector("[data-gallery-prev]"),
  galleryNext: document.querySelector("[data-gallery-next]"),
};

const pepperLayer = document.querySelector(".pepper-layer");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const STEAKS_NOTICE =
  "Все стейки подаются без гарнира и без соуса (кроме Филе Миньон и Скерт-стейка), поэтому при приёме заказа необходимо обязательно уточнить желаемую прожарку и предложить гостю гарнир и соус";

const currency = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

function formatPrice(value) {
  if (!Number.isFinite(value)) {
    return null;
  }

  return currency.format(value).replace("RUB", "₽").trim();
}

function getPriceLabel(item) {
  return formatPrice(item.price) || item.priceLabel || "Цена в ресторане";
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getCategories() {
  return [...new Set(menuItems.map((item) => item.category))];
}

function getFilteredItems() {
  return menuItems.filter((item) => item.category === state.activeCategory);
}

function getDisplaySection(item) {
  if (item.category === "СТЕЙКИ" && item.section === STEAKS_NOTICE) {
    return "";
  }

  return item.section;
}

function renderCategories() {
  if (!els.categories) {
    return;
  }

  els.categories.innerHTML = getCategories()
    .map(
      (category) => `
        <button
          class="category-tab ${category === state.activeCategory ? "is-active" : ""}"
          type="button"
          data-category="${escapeHtml(category)}"
        >
          ${escapeHtml(category)}
        </button>
      `,
    )
    .join("");
}

function renderProducts() {
  if (!els.products) {
    return;
  }

  const categoryNote =
    state.activeCategory === "СТЕЙКИ"
      ? `
        <div class="category-note">
          <span>Важно</span>
          <p>${escapeHtml(STEAKS_NOTICE)}</p>
        </div>
      `
      : "";

  const productCards = getFilteredItems()
    .map((item) => {
      const meta = [item.category, getDisplaySection(item)].filter(Boolean).join(" · ");

      return `
        <article class="product-card" aria-label="${escapeHtml(item.name)}">
          <div class="product-image">
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" />
          </div>
          <div class="product-body">
            <div>
              <p class="product-meta">${escapeHtml(meta)}</p>
              <h3 class="product-title">${escapeHtml(item.name)}</h3>
            </div>
            <div class="product-details">
              <p class="product-description">${escapeHtml(item.description)}</p>
              <div class="product-composition">
                <span>Состав</span>
                <p>${escapeHtml(item.composition)}</p>
              </div>
              <div class="product-footer">
                <span>Цена</span>
                <strong class="price">${escapeHtml(getPriceLabel(item))}</strong>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  els.products.innerHTML = categoryNote + productCards;
}

function updatePepperShift() {
  if (!pepperLayer) {
    return;
  }

  document.body.style.setProperty("--pepper-shift", `${window.scrollY}px`);
}

function setupGalleryCarousel() {
  if (!els.galleryTrack || prefersReducedMotion.matches) {
    return;
  }

  let isPaused = false;
  let animationFrameId = null;
  let lastTimestamp = 0;
  const speed = 24;

  const getStep = () => {
    const firstSlide = els.galleryTrack.querySelector(".gallery-slide");

    if (!firstSlide) {
      return els.galleryTrack.clientWidth * 0.8;
    }

    const styles = window.getComputedStyle(els.galleryTrack);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    return firstSlide.getBoundingClientRect().width + gap;
  };

  const scrollByStep = (direction) => {
    els.galleryTrack.scrollBy({
      left: getStep() * direction,
      behavior: "smooth",
    });
  };

  const tick = (timestamp) => {
    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    const delta = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    if (!isPaused) {
      const maxScroll = els.galleryTrack.scrollWidth - els.galleryTrack.clientWidth;
      els.galleryTrack.scrollLeft += (speed * delta) / 1000;

      if (els.galleryTrack.scrollLeft >= maxScroll - 1) {
        els.galleryTrack.scrollTo({ left: 0, behavior: "auto" });
      }
    }

    animationFrameId = window.requestAnimationFrame(tick);
  };

  const pause = () => {
    isPaused = true;
  };

  const resume = () => {
    isPaused = false;
  };

  els.galleryPrev?.addEventListener("click", () => {
    pause();
    scrollByStep(-1);
  });

  els.galleryNext?.addEventListener("click", () => {
    pause();
    scrollByStep(1);
  });

  els.galleryCarousel?.addEventListener("mouseenter", pause);
  els.galleryCarousel?.addEventListener("mouseleave", resume);
  els.galleryCarousel?.addEventListener("focusin", pause);
  els.galleryCarousel?.addEventListener("focusout", resume);
  els.galleryTrack.addEventListener("pointerdown", pause);
  els.galleryTrack.addEventListener("pointerup", resume);

  animationFrameId = window.requestAnimationFrame(tick);

  window.addEventListener("pagehide", () => {
    if (animationFrameId) {
      window.cancelAnimationFrame(animationFrameId);
    }
  });
}

if (els.categories) {
  els.categories.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");

    if (!button) {
      return;
    }

    state.activeCategory = button.dataset.category;
    renderCategories();
    renderProducts();
  });
}

if (pepperLayer) {
  updatePepperShift();
  window.addEventListener("scroll", updatePepperShift, { passive: true });
}

renderCategories();
renderProducts();
setupGalleryCarousel();
