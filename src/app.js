const heroSection = document.getElementById("hero");
const quoteSection = document.getElementById("quote-section");
const electrifyingSection = document.getElementById("electrifying-section");
const londonSection = document.getElementById("london-section");
const trySection = document.getElementById("try-section");
const greenerSection = document.getElementById("greener-section");
const chargingSection = document.getElementById("charging-section");
const highSection = document.getElementById("high-spec-section");
const askSection = document.getElementById("ask-section");
const meetSection = document.getElementById("meet-section");
const footer = document.querySelector("footer");
const main = document.querySelector("main");

function sectionHeaderAnimation(item) {
  let headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let headerTl = gsap.timeline();
          let item = entry.target;

          if (innerWidth >= 768) {
            headerTl.fromTo(
              item.querySelector("div"),
              { opacity: 0, scale: 0.4 },
              { opacity: 1, scale: 1 }
            );
          }

          headerTl.fromTo(
            item.querySelector("h2"),
            { opacity: 0, left: 20 },
            { opacity: 1, left: 0 }
          );

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

function gridCardsAnimation(cards) {
  let cardsTl = gsap.timeline();

  let gridCardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (innerWidth >= 1200) {
            cardsTl.fromTo(
              entry.target,
              { opacity: 0, top: -10 },
              { opacity: 1, top: 0, duration: 1 },
              "<=+0.2"
            );
          } else if (innerWidth >= 768) {
            cardsTl.fromTo(
              entry.target,
              { opacity: 0, left: 10 },
              { opacity: 1, left: 0, duration: 0.9 },
              "<=+0.2"
            );
          } else {
            cardsTl.fromTo(entry.target, { opacity: 0 }, { opacity: 1, duration: 0.7 });
          }
          gridCardObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "-40% 0% -40% 0%",
    }
  );

  cards.forEach((card) => {
    gridCardObserver.observe(card);
  });
}

function startHeroSectionAnimation() {
  let heroTl = gsap.timeline();

  heroTl.fromTo("#hero div.bg-gradient", { opacity: 0 }, { opacity: 0.9, duration: 0.6 });

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
      "#hero div.logo-line",
      { opacity: 0, top: -10 },
      { opacity: 1, top: 0, duration: 0.6 },
      "<=+0.1"
    );
}

function startNavbarAnimation() {
  gsap.fromTo("#navbar", { opacity: 0 }, { opacity: 1 });
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
                entry.target,
                { opacity: 0, top: -5 },
                { opacity: 1, top: 0, duration: 0.6 }
              );
              break;
            case "img":
              if (innerWidth >= 1024) {
                quoteSectionTl.fromTo(
                  entry.target,
                  { opacity: 0, right: 10, top: -5 },
                  { opacity: 1, right: 0, top: 0, duration: 0.8 },
                  "<=+0.2"
                );
              } else {
                quoteSectionTl.fromTo(
                  entry.target,
                  { opacity: 0, right: 10, top: -5 },
                  { opacity: 1, right: 0, top: 0, duration: 0.8 }
                );
              }

              break;
            case "li":
              if (innerWidth >= 1200) {
                quoteSectionTl.fromTo(
                  entry.target,
                  { opacity: 0, top: -10 },
                  { opacity: 1, top: 0, duration: 0.8 },
                  "<=+0.2"
                );
              } else {
                quoteSectionTl.fromTo(
                  entry.target,
                  { opacity: 0, top: -10 },
                  { opacity: 1, top: 0, duration: 0.4 }
                );
              }
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
    .fromTo("#london-section", { opacity: 0 }, { opacity: 1, duration: 0.6 })
    .fromTo("#london-section p", { opacity: 0 }, { opacity: 1, duration: 1 });
}

function startTrySectionAnimation() {
  let trySectionTl = gsap.timeline();
  trySectionTl
    .fromTo("#try-section", { opacity: 0 }, { opacity: 1, duration: 0.4 })
    .fromTo("#try-section p", { opacity: 0, top: -10 }, { opacity: 1, top: 0, duration: 0.6 })
    .fromTo("#try-section a", { opacity: 0, top: -10 }, { opacity: 1, top: 0, duration: 0.6 });
}

function startGreenerSectionAnimation() {
  sectionHeaderAnimation(document.querySelector("#greener-section header"));

  let whySectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let whySectionTl = gsap.timeline();

          switch (entry.target.localName) {
            case "h3":
              whySectionTl.fromTo(
                entry.target,
                { opacity: 0 },
                { opacity: 1, duration: 0.4, delay: 0.3 }
              );
              break;

            case "img":
              if (innerWidth >= 1024) {
                whySectionTl.fromTo(
                  entry.target,
                  { opacity: 0, scale: 0.8 },
                  { opacity: 1, scale: 1, duration: 0.8, delay: 0.7 }
                );
              } else {
                whySectionTl.fromTo(
                  entry.target,
                  { opacity: 0, scale: 0.8 },
                  { opacity: 1, scale: 1, duration: 0.8 }
                );
              }
              break;
            case "ul":
              startListAnimations();
              break;
          }

          whySectionObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "-20% 0% -40% 0%",
    }
  );

  whySectionObserver.observe(document.querySelector("#greener-section #why-electric h3"));
  whySectionObserver.observe(document.querySelector("#greener-section #why-electric img"));
  whySectionObserver.observe(document.querySelector("#greener-section #why-electric ul"));

  function startListAnimations() {
    let whySectionListObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let li = entry.target;

            let liTl = gsap.timeline();

            liTl
              .fromTo(
                li.querySelector("span.number"),
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.5 }
              )
              .fromTo(
                li.querySelector("span.text-wrapper"),
                { opacity: 0, left: 10 },
                { opacity: 1, left: 0, duration: 0.5 },
                "<=+0.2"
              );

            whySectionListObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "-20% 0% -30% 0%",
      }
    );

    document.querySelectorAll("#greener-section #why-electric ul li").forEach((li) => {
      whySectionListObserver.observe(li);
    });
  }

  let simulateSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.localName) {
            case "h3":
              gsap.fromTo(entry.target, { opacity: 0 }, { opacity: 1 });
              break;

            case "div":
              gridCardsAnimation(
                document.querySelectorAll(
                  "#greener-section #simulate-section div.grid-wrapper article"
                )
              );
              break;
          }
          simulateSectionObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "-20% 0% -50% 0%",
    }
  );

  simulateSectionObserver.observe(document.querySelector("#greener-section #simulate-section h3"));
  simulateSectionObserver.observe(
    document.querySelector("#greener-section #simulate-section div.grid-wrapper")
  );
}

function startChargingSectionAnimation() {
  let chargingSectionTl = gsap.timeline();

  chargingSectionTl
    .fromTo("#charging-section", { opacity: 0 }, { opacity: 1, duration: 0.6 })
    .fromTo("#charging-section h2", { opacity: 0, top: -10 }, { opacity: 1, top: 0, duration: 0.6 })
    .fromTo(
      "#charging-section p",
      { opacity: 0, top: -10 },
      { opacity: 1, top: 0, duration: 0.6 },
      "<=+0.3"
    );
  if (innerWidth >= 1024) {
    chargingSectionTl.fromTo(
      "#charging-section img",
      { opacity: 0, right: 10, top: -10 },
      { opacity: 1, right: 0, top: 0, duration: 0.6 },
      "<=-0.3"
    );
  } else {
    chargingSectionTl.fromTo(
      "#charging-section img",
      { opacity: 0, right: 10, top: 90 },
      { opacity: 1, right: 0, top: 100, duration: 0.6 },
      "<=-0.3"
    );
  }
}

function startHighSectionAnimation() {
  sectionHeaderAnimation(document.querySelector("#high-spec-section header"));

  let highSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.localName) {
            case "p":
              gsap.fromTo(
                entry.target,
                { opacity: 0, top: -10 },
                { opacity: 1, top: 0, duration: 0.6, delay: 0.3 }
              );
              break;
            case "h3":
              gsap.fromTo(
                entry.target,
                { opacity: 0, top: -10 },
                { opacity: 1, top: 0, duration: 0.6 }
              );
              break;
            case "div":
              startColorBlockAnimation();
              break;
          }

          highSectionObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "-20% 0% -50% 0%",
    }
  );

  highSectionObserver.observe(document.querySelector("#high-spec-section p"));
  highSectionObserver.observe(document.querySelector("#high-spec-section #change-section h3"));
  highSectionObserver.observe(
    document.querySelector("#high-spec-section #change-section .grid-wrapper")
  );

  let highAObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            entry.target,
            { opacity: 0, top: -10 },
            { opacity: 1, top: 0, duration: 0.6 }
          );
          highAObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "-15% 0% -15% 0%",
    }
  );

  highAObserver.observe(document.querySelector("#high-spec-section #change-section a"));

  function startColorBlockAnimation() {
    let colorBlockTl = gsap.timeline();
    const sliderWrapper = document.querySelector(
      "#high-spec-section #change-section .grid-wrapper .slider-block-wrapper"
    );

    colorBlockTl.fromTo(
      "#high-spec-section #change-section .grid-wrapper img.base-car",
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 0.5 }
    );

    let sliderObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            colorBlockTl
              .fromTo(
                sliderWrapper.querySelector("p span.start"),
                { opacity: 0 },
                { opacity: 1, duration: 0.5 }
              )
              .fromTo(
                sliderWrapper.querySelector("#slider-c1"),
                { opacity: 0 },
                { opacity: 1, duration: 0.5 },
                "<="
              )
              .fromTo(
                sliderWrapper.querySelector("#slider-cdrag"),
                { opacity: 0 },
                { opacity: 1, duration: 0.5 },
                "<="
              )
              .fromTo(
                sliderWrapper.querySelector("#slider-line"),
                { clipPath: "polygon(0% 0%, 0% 0%, 0% 120%, 0% 120%)" },
                {
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 120%, 0% 120%)",
                  transition: "clip-path",

                  duration: 3.2,
                }
              )
              .fromTo(
                sliderWrapper.querySelector("#slider-line-light"),
                { clipPath: "polygon(0% 0%, 0% 0%, 0% 120%, 0% 120%)" },
                {
                  opacity: 0.4,
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 120%, 0% 120%)",
                  transition: "clip-path",
                  duration: 3.2,
                },
                "<="
              )
              .fromTo(
                "#silver-color-car",
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.2,
                },
                "<=-0.1"
              )
              .fromTo(
                "#grey-color-car",
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.2,
                },
                "<=0.6"
              )
              .fromTo(
                "#urano-color-car",
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.2,
                },
                "<=0.7"
              )
              .to("#silver-color-car", { opacity: 0, duration: 0.2 }, "<=")
              .fromTo(
                "#black-color-car",
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.2,
                },
                "<=0.7"
              )
              .to("#grey-color-car", { opacity: 0, duration: 0.2 }, "<=")
              .fromTo(
                "#blue-color-car",
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.2,
                },
                "<=0.7"
              )
              .to("#urano-color-car", { opacity: 0, duration: 0.2 }, "<=")
              .fromTo(
                sliderWrapper.querySelector("p span.finish"),
                { opacity: 0 },
                { opacity: 1, duration: 0.7 },
                ">="
              )
              .fromTo(
                sliderWrapper.querySelector("#slider-cfilled"),
                { opacity: 0 },
                { opacity: 1, duration: 0.7 },
                "<="
              )
              .fromTo(
                sliderWrapper.querySelector("#slider-c2"),
                { opacity: 0 },
                { opacity: 1, duration: 0.1 },
                ">=-0.1"
              )
              .to(sliderWrapper.querySelector("#slider-line"), {
                opacity: 0,

                duration: 0.5,
                delay: 1,
              })
              .to(
                sliderWrapper.querySelector("#slider-cfilled"),
                { opacity: 0, duration: 0.5 },
                "<="
              )
              .to("#black-color-car", { opacity: 0, duration: 0.2 }, "<=")
              .to("#blue-color-car", { opacity: 0, duration: 0.2 }, "<=")
              .to(sliderWrapper.querySelector("#slider-line"), {
                clipPath: "polygon(0% 0%, 0% 0%, 0% 120%, 0% 120%)",
              })
              .to(sliderWrapper.querySelector("#slider-line"), {
                opacity: 1,
                duration: 0.1,
              });

            sliderObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "-30% 0% -30% 0%",
      }
    );

    sliderObserver.observe(sliderWrapper);
  }
}

function startAskSectionAnimation() {
  let askSectionTl = gsap.timeline();

  askSectionTl
    .fromTo("#ask-section", { opacity: 0 }, { opacity: 1, duration: 0.6 })
    .fromTo(
      "#ask-section p > *",
      { opacity: 0, top: -10 },
      { opacity: 1, top: 0, duration: 0.6, stagger: 0.3 }
    )
    .fromTo("#ask-section a", { opacity: 0, top: -10 }, { opacity: 1, top: 0, duration: 0.6 });
}

function startMeetSectionAnimation() {
  sectionHeaderAnimation(document.querySelector("#meet-section header"));

  let retailerSectionTl = gsap.timeline();

  let retailerSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          retailerSectionTl
            .fromTo(
              "#retailer-section p",
              { opacity: 0, top: -10 },
              { opacity: 1, top: 0, duration: 0.6 }
            )
            .fromTo(
              "#retailer-section a",
              { opacity: 0, top: -10 },
              { opacity: 1, top: 0, duration: 0.6 },
              "<=+0.3"
            );

          retailerSectionObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "-30% 0% -50% 0%",
    }
  );

  retailerSectionObserver.observe(document.querySelector("#retailer-section .text-wrapper"));

  let imgRoot = "-20% 0% -20% 0%";
  if (innerWidth >= 1024) {
    imgRoot = "-20% 0% -50% 0%";
  }

  let retailerImgObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            entry.target,
            { opacity: 0, left: 10 },
            { opacity: 1, left: 0, duration: 0.6 }
          );

          retailerImgObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: imgRoot,
    }
  );

  retailerImgObserver.observe(document.querySelector("#retailer-section img"));

  let toolsSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.localName) {
            case "h3":
              gsap.fromTo(entry.target, { opacity: 0 }, { opacity: 1 });
              break;
            case "div":
              gridCardsAnimation(document.querySelectorAll("#tools-section div.grid-wrapper div"));
              break;
          }

          toolsSectionObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "-20% 0% -50% 0%",
    }
  );

  toolsSectionObserver.observe(document.querySelector("#tools-section h3"));
  toolsSectionObserver.observe(document.querySelector("#tools-section div.grid-wrapper"));
}

function startFooterAnimation() {
  gsap.fromTo(footer, { opacity: 0 }, { opacity: 1 });
  let rootMargin = "-10% 0% -40% 0%";

  if (innerWidth > 2500) {
    rootMargin = "0% 0% -25% 0%";
  }

  let columnObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let column = entry.target;

          gsap.fromTo(column.querySelector("h4"), { opacity: 0 }, { opacity: 1 });
          gsap.fromTo(
            column.querySelectorAll("ul li"),
            { opacity: 0, top: -5 },
            { opacity: 1, top: 0, stagger: 0.2, delay: 0.5 }
          );

          columnObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: rootMargin,
    }
  );

  footer.querySelectorAll(".grid-column").forEach((column) => {
    columnObserver.observe(column);
  });

  let linksObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let list = entry.target;

          gsap.fromTo(list.querySelectorAll("li"), { opacity: 0 }, { opacity: 1, stagger: 0.1 });
        }
      });
    },
    { threshold: 0.9 }
  );

  linksObserver.observe(footer.querySelector("ul.links-line"));
}

function enableAnimations(id) {
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
    case "greener-section":
      startGreenerSectionAnimation();
      break;
    case "charging-section":
      startChargingSectionAnimation();
      break;
    case "high-spec-section":
      startHighSectionAnimation();
      break;
    case "ask-section":
      startAskSectionAnimation();
      break;
    case "meet-section":
      startMeetSectionAnimation();
      break;
    default:
      startNavbarAnimation();
      break;
  }
}

let sectionsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        enableAnimations(entry.target.id);
        sectionsObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: "-20% 0% -60% 0%",
  }
);

let rootMargin = "0% 0% -40% 0%";

if (innerWidth > 2500) {
  rootMargin = "0% 0% -25% 0%";
}

let footerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startFooterAnimation();
        footerObserver.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: rootMargin,
  }
);

sectionsObserver.observe(heroSection);
sectionsObserver.observe(quoteSection);
sectionsObserver.observe(electrifyingSection);
sectionsObserver.observe(londonSection);
sectionsObserver.observe(trySection);
sectionsObserver.observe(greenerSection);
sectionsObserver.observe(chargingSection);
sectionsObserver.observe(highSection);
sectionsObserver.observe(askSection);
sectionsObserver.observe(meetSection);
sectionsObserver.observe(main);
footerObserver.observe(footer);

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

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (innerWidth < 768) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

const input = document.getElementById("range-input");
const dragCircle = document.getElementById("slider-cdrag");
const sliderLine = document.getElementById("slider-line");

const whiteCar = document.getElementById("white-color-car");
const silverCar = document.getElementById("silver-color-car");
const greyCar = document.getElementById("grey-color-car");
const uranoCar = document.getElementById("urano-color-car");
const blackCar = document.getElementById("black-color-car");
const blueCar = document.getElementById("blue-color-car");

const colorCar = document.querySelectorAll(".color-car");

input.addEventListener("input", (e) => {
  let perc = e.target.value;
  console.log(perc);
  dragCircle.style.left = `${perc}%`;

  if (perc < 10) {
    sliderLine.style.clipPath = `polygon(0 0, 0% 0, 0% 100%, 0% 100%)`;
  } else if (perc >= 10 && perc <= 90) {
    distance = (perc - 10) * 1.25;
    sliderLine.style.clipPath = `polygon(0 0, ${distance}% 0, ${distance}% 100%, 0% 100%)`;
  } else {
    sliderLine.style.clipPath = `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`;
  }

  switch (true) {
    case perc > 85:
      blueCar.style.opacity = 1;
      blackCar.style.opacity = 1;
      uranoCar.style.opacity = 1;
      greyCar.style.opacity = 1;
      silverCar.style.opacity = 1;

      break;
    case perc > 68:
      blueCar.style.opacity = 0;
      blackCar.style.opacity = 1;
      uranoCar.style.opacity = 1;
      greyCar.style.opacity = 1;
      silverCar.style.opacity = 1;
      break;
    case perc > 50:
      blueCar.style.opacity = 0;
      blackCar.style.opacity = 0;
      uranoCar.style.opacity = 1;
      greyCar.style.opacity = 1;
      silverCar.style.opacity = 1;

      break;
    case perc > 32:
      blueCar.style.opacity = 0;
      blackCar.style.opacity = 0;
      uranoCar.style.opacity = 0;
      greyCar.style.opacity = 1;
      silverCar.style.opacity = 1;

      break;
    case perc > 15:
      blueCar.style.opacity = 0;
      blackCar.style.opacity = 0;
      uranoCar.style.opacity = 0;
      greyCar.style.opacity = 0;
      silverCar.style.opacity = 1;

      break;

    default:
      blueCar.style.opacity = 0;
      blackCar.style.opacity = 0;
      uranoCar.style.opacity = 0;
      greyCar.style.opacity = 0;
      silverCar.style.opacity = 0;
      break;
  }
});

input.addEventListener("change", (e) => {
  let perc = e.target.value;

  if (perc < 10) {
    dragCircle.style.left = `0%`;
  } else if (perc >= 10 && perc <= 90) {
    dragCircle.style.left = `${perc}%`;
  } else {
    dragCircle.style.left = `100%`;
  }
});
