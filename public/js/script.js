let event = 1;
function decrement() {
  if (event === 1) event = 5;
  else event--;
  eventChange();
}
function increment() {
  if (event === 5) event = 1;
  else event++;
  eventChange();
}

function eventChange() {
  switch (event) {
    case 1:
      document.getElementById("event-head").innerHTML = "Event 1";
      document.getElementById(
        "event-info"
      ).innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias at
          tenetur, architecto temporibus ea repellat libero modi ab
          repudiandae, maxime id.Vero laboriosam culpa totam, tempore non
          esse quo dignissimos repudiandae qui voluptatum iusto ea rem.
          Voluptatem saepe obcaecati nobis cumque est deserunt praesentium cum
          modi corporis incidunt ut quaerat quidem quod non, placeat pariatur
          officia rem tenetur doloremque, nam facilis ? Ipsum nam repellendus
          laboriosam sunt quae laudantium illum eum, pariatur expedita ex
          tenetur molestias sint animi suscipit incidunt non ? Est, labore.
          Saepe animi voluptatibus temporibus ab, amet consequatur.Deserunt
          aspernatur magni a cum pariatur architecto, omnis sunt laborum
          voluptatem!`;
      document.getElementById("event-box").style.backgroundColor = "#074f64";
      break;
    case 2:
      document.getElementById("event-head").innerHTML = "Event 2";
      document.getElementById(
        "event-info"
      ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem magni perferendis quae dolores dicta explicabo illum maxime suscipit, dolor labore recusandae, voluptas omnis! Modi at consequatur quo eligendi quisquam laboriosam harum reprehenderit hic reiciendis non veniam nam officia iusto inventore eos earum, quasi labore necessitatibus recusandae, error vitae! Assumenda nam aperiam pariatur impedit corporis adipisci nihil repellendus eaque iure quisquam. Facere eveniet repudiandae cupiditate temporibus corporis, sunt veniam. Consequuntur nesciunt quae ipsam autem incidunt, similique placeat, inventore ipsum alias, expedita consequatur velit esse neque laudantium? Magni ratione ab iure modi omnis perspiciatis, id dignissimos alias autem? Dolore, delectus explicabo!`;
      document.getElementById("event-box").style.backgroundColor = "#642d61";
      break;
    case 3:
      document.getElementById("event-head").innerHTML = "Event 3";
      document.getElementById(
        "event-info"
      ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet tempore voluptates iste consectetur maxime rem, praesentium exercitationem quod suscipit minima labore provident, unde cum autem voluptatum ullam? Amet pariatur at consequatur nam, sapiente aliquam recusandae facilis consequuntur nisi enim ipsam eum modi quis minus beatae neque repudiandae molestias eligendi hic fugiat libero quos animi? Quaerat in voluptate est magni nam sed quod veritatis perferendis assumenda, facilis corporis, natus nemo praesentium placeat labore cum consectetur explicabo reprehenderit? Dolore laborum, iste qui recusandae laboriosam inventore est reprehenderit aliquam, voluptate doloribus voluptas quaerat odit, nam totam aut. Qui autem in itaque est!`;
      document.getElementById("event-box").style.backgroundColor = "#193117";
      break;
    case 4:
      document.getElementById("event-head").innerHTML = "Event 4";
      document.getElementById(
        "event-info"
      ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam repellat quibusdam recusandae magni debitis quod sunt sint vel iste consequatur cupiditate quia tempore, a aut incidunt nemo, ad beatae, eligendi temporibus velit quam. Illo ducimus, facere ab magnam voluptatum saepe incidunt sapiente id illum culpa totam obcaecati, maxime cupiditate! Obcaecati distinctio doloribus voluptas officia in, dolor placeat repellendus explicabo nesciunt molestiae saepe, quo iusto incidunt est ducimus reiciendis aliquid optio. Fugiat consectetur iure deleniti totam obcaecati nobis, nam harum blanditiis sed recusandae placeat minima tenetur optio accusantium maiores autem pariatur. Cum porro exercitationem ipsum sapiente voluptas odit in necessitatibus.`;
      document.getElementById("event-box").style.backgroundColor = "#440101";
      break;
    case 5:
      document.getElementById("event-head").innerHTML = "Event 5";
      document.getElementById(
        "event-info"
      ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut quae dolorum commodi numquam rerum cumque veniam. Delectus modi quibusdam doloremque ex veritatis recusandae aperiam mollitia dignissimos culpa aliquid. Non similique accusantium sapiente ab saepe expedita voluptates tempore reiciendis illo eaque nemo, labore inventore harum, accusamus consequuntur, exercitationem hic. Sit aut deleniti provident exercitationem praesentium quibusdam saepe minus, delectus sequi nobis culpa dignissimos placeat quis facere possimus molestiae magni quo blanditiis temporibus, ipsa consequuntur, distinctio beatae. Officiis accusamus alias reiciendis perspiciatis laboriosam quidem veritatis vel amet non nesciunt? Corporis culpa vitae consequuntur dolores molestias impedit placeat nobis minus consectetur harum?`;
      document.getElementById("event-box").style.backgroundColor = "#2e3510";
      break;
  }
}

function eventPage() {
  switch (event) {
    case 1:
      document.getElementById("register").href = "event1";
      break;
    case 2:
      document.getElementById("register").href = "event2";
      break;
    case 3:
      document.getElementById("register").href = "event3";
      break;
    case 4:
      document.getElementById("register").href = "event4";
      break;
    case 5:
      document.getElementById("register").href = "event5";
      break;
  }
}

function colorBox(event) {
  switch (event) {
    case 1:
      document.getElementById("event-box").style.backgroundColor = "black";
      break;
    default:
      document.getElementById("event-box").style.backgroundColor = "black";
  }
}

function about1() {
  document.getElementById("about").style.backgroundColor = "#074f64";
  document.getElementById("rules").style.backgroundColor = "#032833";
  document.getElementById("register").style.backgroundColor = "#032833";
  document.getElementById("event-info").innerHTML =
    "<br /> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laudantium consequatur velit necessitatibus expedita pariatur vitae dolorem nobis reprehenderit, quidem nihil veritatis ipsum voluptatum earum quisquam provident itaque sequi perferendis culpa corporis, qui cupiditate eius ea sunt! Ipsa accusantium hic necessitatibus adipisci perferendis voluptatem, recusandae ipsum, debitis possimus aliquam expedita porro ? Reprehenderit natus necessitatibus tempora modi! Iste suscipit quo molestias placeat, velit soluta voluptatum praesentium eum et.Sunt corrupti molestias odit, consectetur culpa tempore eos, ipsum cupiditate neque voluptatem voluptate vel ? Quasi quo laudantium sapiente tenetur nisi fugit numquam, itaque iure dolorum nemo totam tempore aut! Voluptate molestias, laborum quibusdam iste praesentium deleniti ? Enim omnis distinctio porro, dolore velit at voluptatibus labore harum voluptas ex, aspernatur pariatur ut commodi vero quod architecto blanditiis repellat nisi similique nesciunt quae sunt placeat perferendis consequatur. Dolorum quae debitis soluta, labore corporis autem totam animi obcaecati consequuntur blanditiis eos minima rerum amet dolores sint, eum, aspernatur commodi natus fuga laudantium.Mollitia labore repellendus eaque! Iusto voluptatibus necessitatibus porro nobis adipisci qui odit modi, officia ipsam maiores recusandae nam molestias sunt animi provident quia tempora aspernatur ? Amet maxime quibusdam commodi harum eius placeat soluta sit, beatae ipsa quisquam dicta rem minus est mollitia ipsam possimus";
}

function rules1() {
  document.getElementById("about").style.backgroundColor = "#032833";
  document.getElementById("rules").style.backgroundColor = "#074f64";
  document.getElementById("register").style.backgroundColor = "#032833";
  document.getElementById("event-info").innerHTML =
    "<br /> <br />  Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus incidunt dolores temporibus tempora illum sint natus recusandae molestias repudiandae ipsam.Dignissimos modi corporis beatae eaque explicabo laboriosam tempora cum laudantium libero inventore ? Illo obcaecati rerum neque, quia quam, nisi laborum culpa velit iste voluptatem dolores nesciunt molestiae perspiciatis hic quo eos molestias maiores voluptatum saepe! Sint, placeat eius! Aperiam sequi quibusdam quia asperiores tempora iusto enim repellendus, hic recusandae, laudantium incidunt blanditiis voluptates odit accusantium voluptatibus itaque, facere libero tenetur ducimus.Culpa voluptate sint voluptatibus nobis dicta sunt laborum beatae at nam quidem! Fugiat quis neque dolorem voluptatibus at! Impedit eveniet necessitatibus nemo sed, illo quo earum expedita sequi reiciendis ducimus quos voluptatum sit minima modi fuga voluptate harum distinctio recusandae doloremque, fugit rem nihil! Harum cupiditate, rerum placeat et nihil natus architecto consequuntur facilis tempore eum, nisi laborum ? Fugiat eos, quo laudantium accusamus quam dolorum culpa provident quas illum recusandae repudiandae amet, minima velit ipsum, ad quae vero error.Laudantium vel officia deserunt dolores quibusdam nihil labore porro, temporibus possimus doloremque ? Fugiat tempora saepe dolores nam nostrum iure, enim et ? Nulla omnis, dolore voluptatem alias adipisci dicta expedita totam nam voluptas ipsam tempore a in, aspernatur itaque, cumque id!";
}

function register1() {
  document.getElementById("about").style.backgroundColor = "#032833";
  document.getElementById("rules").style.backgroundColor = "#032833";
  document.getElementById("register").style.backgroundColor = "#074f64";
  document.getElementById("event-info").innerHTML =
    "<br /> <br />  Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti, culpa dignissimos eius in non dolorum sit voluptas repudiandae blanditiis ex reprehenderit, dolore eaque autem possimus nobis explicabo, praesentium aliquid itaque! Ratione dolor rerum, ipsum odio dolores officia.Dolores repellendus fugiat mollitia porro, vel consequuntur ? Ut dignissimos nostrum voluptatem, architecto quam minus quibusdam tenetur, itaque repudiandae sapiente, omnis et! Perferendis fugiat, unde, voluptatem deserunt, atque autem repellat necessitatibus tempore porro culpa dolore omnis ab doloremque velit ? A quod ipsam tenetur alias, doloremque inventore est quam ipsum sit sapiente explicabo hic autem recusandae porro ullam repellat ? Culpa, laudantium! Illum, accusamus nemo.Officia, nulla.Nihil accusantium voluptas ea voluptatem aspernatur, exercitationem nulla ullam est itaque ex voluptates, enim consectetur.Deleniti animi, ut reprehenderit, distinctio sequi aut odio sed vitae enim sunt ad porro.Consequatur tempore praesentium ad repellat dolorem modi aperiam! Blanditiis amet magnam quibusdam repudiandae commodi quis illo, laboriosam ex at necessitatibus explicabo nulla, officiis nesciunt id maiores natus beatae impedit alias illum, culpa ullam eum doloremque omnis molestiae.Veniam a exercitationem iusto nostrum unde aspernatur cumque labore est quaerat officiis necessitatibus ad ex rerum pariatur tenetur aliquid, repellendus dignissimos.Dolores, sint! Officia accusantium odio consectetur blanditiis quaerat dolores natus in deleniti!";
}
function about2() {
  document.getElementById("about").style.backgroundColor = "#642d61";
  document.getElementById("rules").style.backgroundColor = "#41033d";
  document.getElementById("register").style.backgroundColor = "#41033d";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.Magnam officiis corporis itaque a blanditiis fugiat ad quam voluptate accusamus officia, libero sit nobis optio quae soluta ex animi eos maiores tempore facere ipsum culpa pariatur ullam! Nemo officia, quos expedita voluptatum voluptatibus, enim tempora ad iure illo perferendis labore similique distinctio ? Voluptatem fuga praesentium provident atque reiciendis explicabo nemo possimus ut quidem aspernatur soluta sapiente, odio eligendi accusamus incidunt molestias ? Est a fugiat incidunt eos consequatur nostrum aperiam ? Veritatis fugit ad praesentium laboriosam impedit aut molestiae quam sed consequatur nobis soluta ut porro minima provident, quibusdam amet adipisci ipsam unde rerum dolorem.Asperiores, aperiam fugiat temporibus eveniet quaerat, modi ullam, nulla ex et accusantium rerum ? Necessitatibus quae alias sit nemo iusto voluptas distinctio, aperiam quos et, molestias molestiae animi, pariatur suscipit incidunt odio! Aperiam incidunt odio laudantium architecto ut aliquam at vel ipsam voluptatem iure, nam, itaque explicabo perspiciatis accusamus dolor repellendus autem.Nisi deleniti quibusdam, quidem error, cupiditate, aspernatur iste voluptatum facere vero sit temporibus laboriosam quaerat magni mollitia odio ipsam inventore ab ? Asperiores, accusantium.Molestias esse fugit nam maiores illum, optio in voluptatibus reiciendis hic officia! Quos exercitationem vel esse ipsa.Eius at facilis libero.Atque, mollitia veniam!";
}

function rules2() {
  document.getElementById("about").style.backgroundColor = "#41033d";
  document.getElementById("rules").style.backgroundColor = "#642d61";
  document.getElementById("register").style.backgroundColor = "#41033d";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda laborum asperiores nihil, et autem explicabo cupiditate deserunt possimus.Nihil obcaecati quis non perferendis, dolorum eos adipisci sapiente nobis maxime porro a maiores cupiditate ea consectetur debitis.Incidunt earum perferendis modi veritatis consequuntur, similique sit esse iusto quaerat architecto distinctio voluptatem ipsum corrupti mollitia magni ducimus aperiam quisquam reprehenderit nostrum dolores exercitationem obcaecati! Et id distinctio, ratione ducimus deserunt neque in voluptatibus assumenda architecto eaque sit! Eos distinctio error officiis tempore ipsam debitis omnis dolorum voluptatum! Rerum aliquid commodi dolores eligendi sunt.Veniam culpa omnis tenetur eveniet perspiciatis eius, nesciunt excepturi minus voluptate exercitationem nobis ipsa enim blanditiis natus in corporis voluptates sit a odio.Exercitationem accusamus totam ipsam perferendis quasi, vitae architecto iure adipisci voluptas blanditiis enim unde, dolorem in magnam excepturi eius ipsa autem dolore.Facere ipsa ipsum harum soluta perferendis officiis itaque minima vel, possimus non ullam eligendi accusamus molestias fuga deleniti rerum repellat odit atque nihil eaque vitae suscipit necessitatibus tempore aperiam.Placeat illum facere praesentium unde obcaecati, tempora illo dolor blanditiis dolore accusamus saepe explicabo! Quaerat debitis explicabo laborum ipsam amet corporis ipsum deserunt incidunt, ab quae aut repellat voluptatum earum quos error veritatis deleniti molestiae!";
}

function register2() {
  document.getElementById("about").style.backgroundColor = "#41033d";
  document.getElementById("rules").style.backgroundColor = "#41033d";
  document.getElementById("register").style.backgroundColor = "#642d61";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.Optio, est accusamus! Velit eligendi neque distinctio ipsum voluptatum facilis iure placeat, iusto doloribus at corporis adipisci cumque laboriosam numquam quia aliquid, dolore voluptas necessitatibus repellat dolorum fugit est, dolor delectus voluptate! In eaque, reiciendis maiores dicta fugit, ea eos iste veniam dolorum repellendus distinctio sed soluta, consequuntur vitae quasi cupiditate deserunt.Ut, magnam.Alias earum ratione et iure laudantium voluptas sapiente provident, quaerat recusandae veritatis corporis ipsam nemo, omnis, pariatur fugiat cupiditate perspiciatis velit eius similique molestiae nobis fuga quibusdam dignissimos vel.Consequuntur laboriosam, explicabo eveniet veniam quisquam eum nostrum ducimus.Vel placeat, error reprehenderit sunt beatae quia accusantium necessitatibus vero ex quo earum praesentium cum nesciunt minus corporis ipsum! Impedit maiores commodi tempore nulla adipisci ratione suscipit iusto, assumenda illo ? Ipsum rerum dicta, reprehenderit quia magnam cum veniam ratione ? Consequatur ab quibusdam fuga id assumenda ipsam error ? Fuga exercitationem quos vel dignissimos doloremque! Quas tenetur minima asperiores repellendus ? Vel fugiat placeat enim id neque quia deserunt, aperiam eligendi voluptate voluptatem, repellat nam iusto architecto amet consequatur molestiae, alias veniam repellendus necessitatibus quos.Aut, facere inventore eaque delectus placeat quam ex doloremque laudantium dolores ea minima qui totam maiores ? Esse, minus!";
}
function about3() {
  document.getElementById("about").style.backgroundColor = "#193117";
  document.getElementById("rules").style.backgroundColor = "#092707";
  document.getElementById("register").style.backgroundColor = "#092707";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.Quibusdam modi illo amet aliquam provident officiis autem tempora, perferendis sunt nisi cumque facere libero itaque fugit quisquam nulla sed, voluptatibus, sapiente nihil placeat! Laborum repudiandae odit consectetur, sit quibusdam nisi cupiditate nemo ullam saepe iure vitae quas qui.Iure eveniet hic ducimus saepe repellendus placeat perferendis quidem omnis fuga doloribus ? Minima nemo in sapiente aliquid aperiam.Autem fugiat, doloribus inventore dolore id nesciunt quos officiis assumenda accusamus illo, ipsam sapiente unde nobis praesentium quibusdam est! Sequi repellendus incidunt nam cum similique repellat nihil alias quis, quidem totam iure rem vel magni culpa, eum praesentium tempora tenetur dolorem harum corrupti neque odit sit accusantium! Id amet quia, voluptatum quod distinctio officiis ipsam accusamus, totam neque, praesentium et! Architecto deleniti magnam quidem maiores assumenda eveniet officiis, et labore, quia culpa inventore nemo tempore neque! Inventore voluptate numquam blanditiis ex ipsum accusamus aliquam similique tempora, id assumenda quasi quae, placeat animi fugit ipsa nobis consectetur, saepe dignissimos aperiam odit.Laboriosam totam doloribus quod distinctio.Amet, itaque incidunt odio ipsam vel quas! Odit vel rerum veritatis dolor voluptatibus, omnis voluptatem libero repellat, assumenda rem dicta soluta aliquam id distinctio.Repellat impedit ex mollitia vel placeat!";
}

function rules3() {
  document.getElementById("about").style.backgroundColor = "#092707";
  document.getElementById("rules").style.backgroundColor = "#193117";
  document.getElementById("register").style.backgroundColor = "#092707";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Deleniti cumque, in laborum earum ipsam asperiores eaque dolore, veritatis libero ducimus ut minus deserunt similique maxime necessitatibus aliquam sequi laudantium sit fuga voluptates id nobis pariatur odio ab.Eius praesentium, non voluptates magnam ut minima sit maiores reprehenderit molestiae incidunt, error officia enim corporis numquam fugit voluptatum sed sequi nobis repellat ? Fuga porro eligendi perspiciatis soluta reprehenderit aperiam est ullam fugiat dolor suscipit sunt explicabo libero obcaecati, quae quos dolores rem voluptatum similique nam modi molestiae.Reiciendis facilis quo libero cum, reprehenderit eaque pariatur saepe quae modi.Possimus libero recusandae illo.Soluta dolor hic enim veniam atque saepe qui consequatur, esse animi ea corporis, optio est vero aliquid eius dolore quasi cupiditate.Facere nisi alias exercitationem eum non sequi ratione corporis quod eaque libero molestias aliquam, dolore cumque vero accusantium, consequuntur officia eos voluptatem aperiam facilis architecto totam magni rerum.Aut saepe vitae quo natus reiciendis nulla ratione ab modi obcaecati praesentium consequatur voluptatibus minus consectetur dolorum iusto, nostrum adipisci enim cupiditate laborum distinctio illo molestias sapiente.Culpa eum eos commodi exercitationem fugit pariatur aut neque, odio natus alias nobis in est quam obcaecati ab tenetur autem ad possimus rerum quibusdam ?";
}

function register3() {
  document.getElementById("about").style.backgroundColor = "#092707";
  document.getElementById("rules").style.backgroundColor = "#092707";
  document.getElementById("register").style.backgroundColor = "#193117";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas porro eaque, quod ullam nulla officiis aliquid illo quisquam facilis numquam omnis unde quidem suscipit cupiditate hic voluptatum voluptate mollitia molestiae natus magni, laboriosam aspernatur! Alias, optio nobis adipisci quasi illum dolore sapiente porro ipsa et exercitationem magnam necessitatibus voluptates deleniti ducimus atque culpa perspiciatis temporibus natus delectus labore repellat ? Quisquam, harum labore iste magni enim excepturi exercitationem nesciunt officia corrupti debitis pariatur eum voluptas obcaecati libero delectus ? Unde vel incidunt ad mollitia odit omnis dignissimos maiores molestiae, dolor exercitationem a optio eum autem ipsam dolores at voluptate illum non consequuntur dolore libero sit.Obcaecati quia architecto quis odit sit, cupiditate, commodi sint sed deserunt rem numquam nulla, quam soluta harum repudiandae.Odio quis eligendi tenetur aspernatur dolore ipsam ullam blanditiis repellat necessitatibus voluptatum ut quibusdam, cupiditate adipisci.Iure suscipit voluptatem assumenda quis blanditiis soluta, tempore illum animi ratione repudiandae, harum explicabo.Maiores placeat tenetur ipsa inventore ex! Animi nisi necessitatibus labore accusantium temporibus quam, in, praesentium quidem, expedita quos rem pariatur dolorem vero fuga sed odio quas minus eaque odit! Nemo vitae autem minima pariatur repudiandae repellendus harum, dignissimos quas, ipsa veniam eum impedit, aperiam vel illo voluptatibus repellat ab.";
}
function about4() {
  document.getElementById("about").style.backgroundColor = "#440101";
  document.getElementById("rules").style.backgroundColor = "#310404";
  document.getElementById("register").style.backgroundColor = "#310404";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ratione commodi rem reiciendis fugiat maxime quaerat deleniti eum praesentium.Nulla explicabo quae libero, beatae tempora molestias incidunt consequatur unde animi eos, iusto rem porro maxime aliquam possimus expedita neque placeat aperiam earum error ipsam accusantium perspiciatis! Culpa, hic fuga, distinctio animi cumque commodi aut maxime error dolore voluptates accusamus, rerum iste facilis deserunt voluptas a tempora! Exercitationem atque fugit cupiditate recusandae quo iusto animi commodi voluptates ad ullam iste ratione magnam dolorum sunt id qui, obcaecati vitae eum ? Fugit facilis, et eaque cupiditate ipsum laboriosam maiores.Doloremque maiores vel dolorum repellat, rerum rem incidunt ipsa aut blanditiis quidem, harum quasi architecto.Illum distinctio magni adipisci nulla unde laboriosam reprehenderit maiores tempora! Cum vel laboriosam aut tempora voluptate error blanditiis autem quas commodi culpa minima dolores asperiores minus, possimus ducimus.Tenetur reprehenderit odio asperiores quo architecto unde magni rerum suscipit provident perspiciatis, aspernatur consectetur! Mollitia laudantium sunt officia placeat.Obcaecati, eveniet cum officia sint veniam perspiciatis magnam architecto, voluptatum explicabo culpa, qui distinctio pariatur eligendi quam ? Quo ut eos blanditiis nisi, qui consequatur sequi dignissimos.Eaque odit quasi optio consequuntur ea cum nemo necessitatibus itaque incidunt excepturi, adipisci, iste, doloribus voluptates iusto.";
}

function rules4() {
  document.getElementById("about").style.backgroundColor = "#310404";
  document.getElementById("rules").style.backgroundColor = "#440101";
  document.getElementById("register").style.backgroundColor = "#310404";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Nemo rerum consequatur laudantium, magni neque inventore eum sed ab tenetur modi ad, fugiat quisquam nulla vel doloribus dicta culpa cupiditate itaque ut veniam! Qui sunt, reiciendis facere minima, quo deleniti sint architecto velit ab consectetur eum sequi.Minus consequatur optio exercitationem fugiat quod dignissimos, accusamus velit, perferendis neque alias nihil nulla beatae hic distinctio blanditiis autem.Officiis doloremque assumenda tempore nihil facilis ducimus obcaecati reprehenderit beatae, hic exercitationem accusantium blanditiis vitae harum adipisci, minus odio sunt est vero tenetur.Odit odio hic sit rerum in amet tempora explicabo expedita.Sint alias architecto culpa numquam sed omnis optio quo error ad praesentium assumenda animi, repudiandae, porro deleniti cupiditate quam recusandae iure iusto vitae debitis eos modi maxime.Ullam natus porro id accusantium possimus voluptatem, vero molestias suscipit harum quam neque voluptas modi dignissimos voluptate quasi ratione eveniet, deleniti laborum dolorem similique quae, sint eius.Expedita est enim animi odio sit architecto unde quos deleniti vitae consequuntur sunt repellendus amet, a quidem blanditiis illum.Dolore asperiores quo inventore mollitia, consectetur omnis, maiores laborum distinctio facere impedit eaque ipsum debitis, at autem! Veniam nesciunt, placeat ipsam exercitationem aut autem dolore facilis consectetur quae similique.";
}

function register4() {
  document.getElementById("about").style.backgroundColor = "#310404";
  document.getElementById("rules").style.backgroundColor = "#310404";
  document.getElementById("register").style.backgroundColor = "#440101";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.Qui eaque veritatis nesciunt sapiente quidem veniam ad pariatur ut corrupti, sequi possimus, atque aperiam aliquid nemo repellendus quis.Incidunt temporibus asperiores minima repellat, assumenda, in qui error, perspiciatis at non magni.Dolores facilis architecto, facere a esse quae soluta itaque commodi similique harum eos ea mollitia adipisci explicabo at sint ex quo dolorem temporibus non.Dicta architecto aspernatur fugit tempora, ducimus nam eligendi ut non error aliquid laboriosam voluptatibus modi reiciendis, dolorem quae cumque dolores earum itaque delectus, expedita numquam ex sunt ipsum accusamus.Earum veritatis iure expedita totam impedit eligendi quibusdam aut ducimus ipsum libero unde quis alias itaque, voluptas culpa repellat vitae distinctio laboriosam veniam porro.Blanditiis magni voluptates doloribus odio totam dignissimos voluptatum sequi distinctio impedit, sunt, cupiditate mollitia.Cumque, optio, ut iure excepturi quis quam doloremque labore unde magnam enim distinctio eligendi ? Vitae aliquam incidunt quaerat et mollitia dicta error accusantium ad exercitationem eos nobis, enim, ipsam alias cupiditate magnam! Dolorum obcaecati accusamus amet pariatur nihil, dolor repellendus hic laborum sit, laboriosam accusantium numquam harum laudantium perferendis ? Explicabo quas sit impedit amet doloribus saepe veritatis fuga, quidem placeat, autem aliquid.Cumque possimus aut nesciunt ad perferendis ? Assumenda!";
}
function about5() {
  document.getElementById("about").style.backgroundColor = "#2e3510";
  document.getElementById("rules").style.backgroundColor = "#232b06";
  document.getElementById("register").style.backgroundColor = "#232b06";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.Laborum magni delectus atque mollitia vel quod est iusto repellat aperiam, eveniet deleniti quam optio dicta iure sit eaque repellendus voluptatum ipsum tempore aut cupiditate! Modi sed qui et commodi ipsa ea praesentium, porro unde eligendi veniam numquam dolorum, aperiam eius dicta ? Ipsa provident facilis, dolores nemo, beatae quibusdam consequatur repellat blanditiis voluptate eligendi minus soluta esse amet sunt nostrum hic laudantium laborum! Error unde esse nihil est provident.Qui architecto quas eligendi.Quas enim dolorem blanditiis facilis nisi earum ipsum.Sed eos mollitia, esse placeat, eius accusamus quia illo exercitationem excepturi dignissimos a cupiditate, amet ipsam et ab reprehenderit odio incidunt ea ? Culpa nihil aliquid tenetur aspernatur minus distinctio corporis est dolor.Aliquam quisquam corporis voluptatem, distinctio nobis minima vero saepe ipsum neque explicabo optio tempora odio quos laborum, asperiores quas eum similique obcaecati.Excepturi temporibus soluta quaerat, omnis voluptatum maxime nesciunt commodi id inventore laboriosam quae eos, possimus ipsam enim alias laborum quos expedita laudantium explicabo mollitia! Quidem voluptate id maiores maxime praesentium consequuntur magnam aperiam expedita, tempore est temporibus qui, commodi voluptatem sunt excepturi et deserunt eligendi eveniet placeat magni! Hic numquam voluptatem, id sunt odit ipsum commodi nihil!";
}

function rules5() {
  document.getElementById("about").style.backgroundColor = "#232b06";
  document.getElementById("rules").style.backgroundColor = "#2e3510";
  document.getElementById("register").style.backgroundColor = "#232b06";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.Error voluptate, doloribus id, deserunt excepturi fugit amet minima obcaecati vel suscipit saepe ratione in aperiam quasi praesentium voluptatum modi ? Quaerat est itaque dolores quidem optio.Asperiores rerum repellat voluptate praesentium quam corrupti nostrum.Ab obcaecati, eius minus nisi accusantium id ducimus commodi vitae rem doloremque aut eligendi iure assumenda dolores dolorem ipsum architecto minima magni quis repellendus labore iusto nobis ? Repudiandae, adipisci saepe voluptate quod unde odio quo quibusdam maiores soluta voluptas neque hic quidem incidunt expedita ut perferendis consequuntur impedit quasi ? Ipsum vero consequuntur sequi exercitationem quae cum.Hic, rerum ? Provident ex atque dolores fuga! Laborum vel, maxime exercitationem provident quisquam accusamus sit impedit illo officia magnam perspiciatis sint recusandae quis! Unde commodi quasi illo iure reprehenderit aperiam fugit labore est nisi odit, eveniet, voluptas culpa esse aut recusandae fuga ? Eaque labore incidunt similique deserunt esse consectetur ullam, molestias minus sed qui laborum at assumenda harum aliquam quos commodi! Voluptates quos voluptatem non inventore sequi est quae, distinctio nulla vitae eaque ex assumenda quaerat.Modi ullam ex minima reprehenderit a.Dolor ullam quaerat id accusamus officiis rem aut ? Aperiam ipsum debitis culpa voluptatum, incidunt delectus iure expedita quas reprehenderit magnam ?";
}

function register5() {
  document.getElementById("about").style.backgroundColor = "#232b06";
  document.getElementById("rules").style.backgroundColor = "#232b06";
  document.getElementById("register").style.backgroundColor = "#2e3510";
  document.getElementById("event-info").innerHTML =
    "<br /> <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ducimus nemo non provident placeat consequatur autem ratione, tenetur aut nisi alias omnis reiciendis totam, iusto qui.Minus consectetur itaque numquam, asperiores atque ullam doloremque non nostrum quam animi temporibus eligendi, est nulla suscipit repellat omnis aliquam dolores odio maxime.Neque accusamus, officia ex molestiae expedita vitae laborum suscipit perferendis! Quae nisi, explicabo minima cum commodi aliquid, ex numquam sunt et itaque temporibus impedit, voluptas dignissimos quis fugiat nostrum quod vero.Nisi, delectus nam ea fugiat ab et blanditiis quaerat error voluptate, quidem esse, tempore quo voluptatem recusandae dignissimos numquam harum quas! Esse dolores doloribus eos vitae minus aspernatur cum quasi, culpa sit assumenda repudiandae exercitationem excepturi tempore animi quod! Voluptas, minima nostrum ? Reiciendis, pariatur.Mollitia nobis nisi quibusdam vel iusto distinctio quae nemo, officia vitae molestiae voluptate corrupti accusamus omnis nostrum a dicta error porro.Officiis sed nesciunt sequi hic delectus officia, harum, illo amet modi itaque inventore consequatur, praesentium numquam at voluptas.Iure dolorum exercitationem ratione iusto quidem, repellat fugiat, accusamus incidunt voluptas provident ipsam nesciunt non accusantium blanditiis reiciendis, deleniti perspiciatis consectetur deserunt ad eligendi enim ullam! Repellendus illum ad veniam reiciendis minima ? Quaerat deleniti qui quis at deserunt.";
}
