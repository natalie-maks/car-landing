const heroSection = document.getElementById("hero");
const quoteSection = document.getElementById("quote-section");
const electrifyingSection = document.getElementById("electrifying-section");
const londonSection = document.getElementById("london-section");
const trySection = document.getElementById("try-section");

function sectionHeaderAnimation(item) {
  let headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let headerTl = gsap.timeline();
          let item = entry.target;

          headerTl
            .fromTo(item.querySelector("div"), { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1 })
            .fromTo(item.querySelector("h2"), { opacity: 0, left: 20 }, { opacity: 1, left: 0 });

          headerObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "-20% 0% -50% 0%",
    }
  );

  headerObserver.observe(item);
}

function startHeroSectionAnimation() {
  let heroTl = gsap.timeline();

  heroTl.fromTo(
    "#hero div.bg-gradient",
    { opacity: 0 },
    { opacity: 0.9, duration: 0.4, delay: 0.5 }
  );

  if (innerWidth >= 1024) {
    heroTl.fromTo(
      "#hero img.discover",
      { opacity: 0, left: 30 },
      { opacity: 1, left: 0, duration: 0.7, delay: 0.3 }
    );
  }

  heroTl
    .fromTo(
      "#hero img.car",
      { opacity: 0, left: 20, transform: "scale(0.95)" },
      {
        opacity: 1,
        left: 0,
        transform: "scale(1)",
        transformOrigin: "right top",
        duration: 1,
      }
    )
    .fromTo(
      "#hero h1 span.future",
      { opacity: 0, left: 30 },
      { opacity: 1, left: 0, duration: 0.6 },
      "<=+0.35"
    )
    .fromTo(
      "#hero h1 span.egolf",
      { opacity: 0, left: 30 },
      { opacity: 1, left: 0, duration: 0.6 },
      "<=+0.2"
    )
    .fromTo(
      "#hero h1 span.future img.line-1",
      { opacity: 0, left: "17%" },
      { opacity: 1, left: "10%", duration: 0.6 },
      "<=+0.1"
    )
    .to(
      "#hero h1 span.future img.line-1",
      {
        animation: "17.9s infinite linear  slide",
      },
      "<="
    )
    .fromTo(
      "#hero h1 span.future img.line-2",
      { opacity: 0, left: "28%" },
      { opacity: 1, left: "18%", duration: 0.6 },
      "<=+0.1"
    )
    .to("#hero h1 span.future img.line-2", { animation: "16s infinite linear  slide" }, "<=")
    .fromTo(
      "#hero h1 span.egolf img.line-3",
      { opacity: 0, left: "102%" },
      { opacity: 1, left: "75%", duration: 0.6 },
      "<=+0.2"
    )
    .to("#hero h1 span.egolf img.line-3", { animation: "15.7s infinite linear  slide" }, "<=")
    .fromTo(
      "#hero header",
      { opacity: 0, top: -10 },
      { opacity: 1, top: 0, duration: 0.6 },
      "<=+0.1"
    );
}

function startQuoteSectionAnimation() {
  let quoteSectionTl = gsap.timeline();

  let quoteSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.localName) {
            case "p":
              quoteSectionTl.fromTo(
                "#quote-section div.quote p",
                { opacity: 0, top: -5 },
                { opacity: 1, top: 0, duration: 0.6 }
              );
              break;
            case "img":
              quoteSectionTl.fromTo(
                "#quote-section div.quote div.img-wrapper img",
                { opacity: 0, right: 10, top: -5 },
                { opacity: 1, right: 0, top: 0, duration: 0.8 },
                "<=+0.2"
              );
              break;
            case "li":
              quoteSectionTl.fromTo(
                entry.target,
                { opacity: 0, top: -10 },
                { opacity: 1, top: 0, duration: 0.8 },
                "<=+0.2"
              );
              break;
          }

          quoteSectionObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "-40% 0% -30% 0%",
    }
  );

  quoteSectionObserver.observe(document.querySelector("#quote-section div.quote p"));
  quoteSectionObserver.observe(
    document.querySelector("#quote-section div.quote div.img-wrapper img")
  );
  document.querySelectorAll("#quote-section ul li").forEach((li) => {
    quoteSectionObserver.observe(li);
  });
}

function startElectrifyingSectionAnimation() {
  sectionHeaderAnimation(document.querySelector("#electrifying-section header"));

  const electrifyingListItems = document.querySelectorAll("#electrifying-section div.grid-item");

  let electrifyingListObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let item = entry.target;
          let electrifyingItemTl = gsap.timeline();

          electrifyingItemTl
            .fromTo(
              item.querySelector("div.number"),
              { opacity: 0, scale: 0.8 },
              { opacity: 0.7, scale: 1, transformOrigin: "center center", duration: 0.6 }
            )
            .fromTo(
              item.querySelector("div.text"),
              { opacity: 0, left: 10 },
              { opacity: 1, left: 0, duration: 0.5 },
              "<=+0.3"
            );

          electrifyingListObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "-30% 0% -30% 0%",
    }
  );
  electrifyingListItems.forEach((item) => {
    electrifyingListObserver.observe(item);
  });
}

function startLondonSectionAnimation() {
  let londonSectionTl = gsap.timeline();
  londonSectionTl
    .fromTo("#london-section", { opacity: 0 }, { opacity: 1, duration: 0.4 })
    .fromTo("#london-section p", { opacity: 0 }, { opacity: 1, duration: 1 });
}

function startTrySectionAnimation() {
  let trySectionTl = gsap.timeline();
  trySectionTl
    .fromTo("#try-section", { opacity: 0 }, { opacity: 1, duration: 0.4 })
    .fromTo("#try-section p", { opacity: 0, top: -10 }, { opacity: 1, top: 0, duration: 0.6 })
    .fromTo("#try-section a", { opacity: 0, top: -10 }, { opacity: 1, top: 0, duration: 0.6 });
}

function enableAnimations(id) {
  console.log(id);

  switch (id) {
    case "hero":
      startHeroSectionAnimation();
      break;
    case "quote-section":
      startQuoteSectionAnimation();
      break;
    case "electrifying-section":
      startElectrifyingSectionAnimation();
      break;
    case "london-section":
      startLondonSectionAnimation();
      break;
    case "try-section":
      startTrySectionAnimation();
      break;

    default:
      break;
  }
}

let sectionsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        enableAnimations(entry.target.id);
        sectionsObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "-20% 0% -60% 0%",
  }
);

sectionsObserver.observe(heroSection);
sectionsObserver.observe(quoteSection);
sectionsObserver.observe(electrifyingSection);
sectionsObserver.observe(londonSection);
sectionsObserver.observe(trySection);

/* 
let Observer = new IntersectionObserver(
   (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
          
       }
     });
   },
   {
     threshold: 0.8,
   rootMargin: "-10% 0% -50% 0%",
   }
 );

Observer.observe();

*/
