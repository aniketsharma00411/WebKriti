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
      break;
    case 2:
      document.getElementById("event-head").innerHTML = "Event 2";
      document.getElementById(
        "event-info"
      ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem magni perferendis quae dolores dicta explicabo illum maxime suscipit, dolor labore recusandae, voluptas omnis! Modi at consequatur quo eligendi quisquam laboriosam harum reprehenderit hic reiciendis non veniam nam officia iusto inventore eos earum, quasi labore necessitatibus recusandae, error vitae! Assumenda nam aperiam pariatur impedit corporis adipisci nihil repellendus eaque iure quisquam. Facere eveniet repudiandae cupiditate temporibus corporis, sunt veniam. Consequuntur nesciunt quae ipsam autem incidunt, similique placeat, inventore ipsum alias, expedita consequatur velit esse neque laudantium? Magni ratione ab iure modi omnis perspiciatis, id dignissimos alias autem? Dolore, delectus explicabo!`;
      break;
    case 3:
      document.getElementById("event-head").innerHTML = "Event 3";
      document.getElementById(
        "event-info"
      ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet tempore voluptates iste consectetur maxime rem, praesentium exercitationem quod suscipit minima labore provident, unde cum autem voluptatum ullam? Amet pariatur at consequatur nam, sapiente aliquam recusandae facilis consequuntur nisi enim ipsam eum modi quis minus beatae neque repudiandae molestias eligendi hic fugiat libero quos animi? Quaerat in voluptate est magni nam sed quod veritatis perferendis assumenda, facilis corporis, natus nemo praesentium placeat labore cum consectetur explicabo reprehenderit? Dolore laborum, iste qui recusandae laboriosam inventore est reprehenderit aliquam, voluptate doloribus voluptas quaerat odit, nam totam aut. Qui autem in itaque est!`;
      break;
    case 4:
      document.getElementById("event-head").innerHTML = "Event 4";
      document.getElementById(
        "event-info"
      ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ullam repellat quibusdam recusandae magni debitis quod sunt sint vel iste consequatur cupiditate quia tempore, a aut incidunt nemo, ad beatae, eligendi temporibus velit quam. Illo ducimus, facere ab magnam voluptatum saepe incidunt sapiente id illum culpa totam obcaecati, maxime cupiditate! Obcaecati distinctio doloribus voluptas officia in, dolor placeat repellendus explicabo nesciunt molestiae saepe, quo iusto incidunt est ducimus reiciendis aliquid optio. Fugiat consectetur iure deleniti totam obcaecati nobis, nam harum blanditiis sed recusandae placeat minima tenetur optio accusantium maiores autem pariatur. Cum porro exercitationem ipsum sapiente voluptas odit in necessitatibus.`;
      break;
    case 5:
      document.getElementById("event-head").innerHTML = "Event 5";
      document.getElementById(
        "event-info"
      ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut quae dolorum commodi numquam rerum cumque veniam. Delectus modi quibusdam doloremque ex veritatis recusandae aperiam mollitia dignissimos culpa aliquid. Non similique accusantium sapiente ab saepe expedita voluptates tempore reiciendis illo eaque nemo, labore inventore harum, accusamus consequuntur, exercitationem hic. Sit aut deleniti provident exercitationem praesentium quibusdam saepe minus, delectus sequi nobis culpa dignissimos placeat quis facere possimus molestiae magni quo blanditiis temporibus, ipsa consequuntur, distinctio beatae. Officiis accusamus alias reiciendis perspiciatis laboriosam quidem veritatis vel amet non nesciunt? Corporis culpa vitae consequuntur dolores molestias impedit placeat nobis minus consectetur harum?`;
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

function about() {
  document.getElementById("about").style.backgroundColor = "rgb(95, 27, 97)";
  document.getElementById("rules").style.backgroundColor = "rgb(112, 13, 116)";
  document.getElementById("register").style.backgroundColor =
    "rgb(112, 13, 116)";
}

function rules() {
  document.getElementById("about").style.backgroundColor = "rgb(112, 13, 116)";
  document.getElementById("rules").style.backgroundColor = "rgb(95, 27, 97)";
  document.getElementById("register").style.backgroundColor =
    "rgb(112, 13, 116)";
}

function register() {
  document.getElementById("about").style.backgroundColor = "rgb(112, 13, 116)";
  document.getElementById("rules").style.backgroundColor = "rgb(112, 13, 116)";
  document.getElementById("register").style.backgroundColor = "rgb(95, 27, 97)";
}

function eventCheck(event1, event2, event3, event4, event5, accommodation) {
  if (event1 === 0) {
    document.getElementById("event1").style.backgroundColor = "#CC3333";
  }
  if (event2 === 0) {
    document.getElementById("event2").style.backgroundColor = "#CC3333";
  }
  if (event3 === 0) {
    document.getElementById("event3").style.backgroundColor = "#CC3333";
  }
  if (event4 === 0) {
    document.getElementById("event4").style.backgroundColor = "#CC3333";
  }
  if (event5 === 0) {
    document.getElementById("event5").style.backgroundColor = "#CC3333";
  }
  if (accommodation === 0) {
    document.getElementById("accommodation").style.backgroundColor = "#CC3333";
  }
}
