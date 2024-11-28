import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200">   <div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div>  <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3>  ${slots.default ? slots.default({}) : ``}  <div class="flex-1 flex justify-between gap-4 items-end" data-svelte-h="svelte-x3l9bh"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "First WebSite",
      icon: "fa-solid fa-user",
      description: "It was the first page that I made in the career, I just use HTML, CSS and JavaScript to create it, it shows a very simple interface and also contains a minigame to try differents manners to connect the pages",
      href: " https://disdem.github.io/HTML-FirstPage/"
    },
    {
      name: "Rick and Morty Page",
      icon: "fa-solid fa-diagram-project",
      description: "A website designed to learn how API's works, using an R&M api I could get all the information of the characters and the universes.",
      href: " https://disdem.github.io/Pagina-Web/"
    },
    {
      name: "Flappy Bird",
      icon: "fa-solid fa-keyboard",
      description: "Just a mini flappybird game.",
      href: "https://disdem.github.io/FlappyBirdWeb/"
    },
    {
      name: "Cards Creator",
      icon: "fa-solid fa-code",
      description: "Just a Card Creator.",
      href: "https://disdem.github.io/CardCreator/"
    },
    {
      name: "3D Cubes",
      icon: "fa-solid fa-cubes",
      description: "Just a practice for the university.",
      href: " https://disdem.github.io/Cubes/"
    },
    {
      name: "Find Game",
      icon: "fa-solid fa-laptop-code",
      description: "Just a practice for the university.",
      href: "https://disdem.github.io/Find-Game/"
    },
    {
      name: "Physics fountain",
      icon: "fa-solid fa-folder-open",
      description: "Just a practice for the university.",
      href: "https://disdem.github.io/physics-fountain/"
    }
  ];
  let benefits = [
    {
      metric: "10x",
      name: "a self taught developer",
      description: "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more."
    },
    {
      name: "a product design & UX finatic",
      description: "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences."
    },
    {
      name: "an excellent communicator",
      description: "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."
    },
    {
      metric: "99.9%",
      name: "a detail-oriented problem solver",
      description: "I pride myself on catching even the smallest details and using creative problem-solving skills to find elegant solutions. Whether debugging code or improving design workflows, I ensure that every aspect of a project meets the highest standards."
    },
    {
      metric: "∞",
      name: "a lifelong learner",
      description: "I have an insatiable curiosity and constantly seek to expand my knowledge and skills. From exploring emerging technologies to mastering advanced design techniques, I'm always eager to learn and grow."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-ycuv1a"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="poppins text-violet-400">Luis</span> Andrade
                <br>Full Stack
                <span class="poppins text-violet-400">Developer and GameDeveloper</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-violet-400">favorite techs</span> includes: JavaScript
                (NEXT.JS or SvelteKit), TailwindCSS, Node.js,, THREE.js &amp; CANNON.js
                or Firebase/Firestore!</p> <a href="https://linktr.ee/Luis_Disdem"><button class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch →</h4></button></a></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "images/Yop-Photoroom.jpg", 0)} alt="Zetane Engine" class="object-cover z-[2] max-h-[70vh]"></div></section> <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-ilbkv3"><h6 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3></div> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200" data-svelte-h="svelte-125tndi"><i class="fa-regular fa-circle-play"></i> <p>Watch the video</p></a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-9i5ubu">It was the first page that I made in the career, I just use <strong class="text-violet-400">HTML, CSS and JavaScript to create it!</strong> it shows a very simple interface and also contains a minigame to try differents manners to connect the pages.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-7ghx2b">Rick &amp; Morty website <strong class="text-violet-400">React</strong>,
                    <strong class="text-violet-400">Node.js + Vite.js</strong>
                    &amp; <strong class="text-violet-400">HTML + CSS</strong> A WebSite designed to learn how to use API&#39;s in a fuctional manner, the website shows a navbar where there are 3 sections, Characters, Description &amp; Worlds(Universes).</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-67y7bb">The FlappyBird is a <strong class="text-violet-400">Node.js, CANNON.JS, THREE.JS, React &amp; Vite.js</strong>
                    web application, hosted on
                    <strong class="text-violet-400">GitHub Pages</strong>, that
                    shows and interactive flappybird in 3D
                    <strong class="text-violet-400">Play it</strong>
                    to have a very funny moment!</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[3] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1esh9go">This Cards Creator is a <strong class="text-violet-400">Node.js, React &amp; Vite.js</strong>
                    web application, hosted on
                    <strong class="text-violet-400">GitHub Pages</strong>, that
                    shows and interactive system that allows you to 
                    <strong class="text-violet-400">create your owns cards</strong>
                    using some specific characteristics!</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[4] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-38rdea">This 3D cubes site is a <strong class="text-violet-400">Node.js, THREE,JS, React &amp; Vite.js</strong>
                    web application, hosted on
                    <strong class="text-violet-400">GitHub Pages</strong>, that
                    shows and interactive system that allows you to 
                    <strong class="text-violet-400">interact with some cubes,</strong>
                    creating this web was a manner to practice how to make 3D objects interactive, so have fun clicking on them and wacthing &#39;em interact!</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[5] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-161dydp">This Find Game site is a <strong class="text-violet-400">Node.js, CANNON.JS, THREE.JS, React &amp; Vite.js</strong>
                    web application, hosted on
                    <strong class="text-violet-400">GitHub Pages</strong>, that
                    shows and interactive system that allows you to 
                    <strong class="text-violet-400">interact with a 3D model,</strong>
                    where the user needs to find some specifics objects to win the game thus getting a congrats screen!</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[6] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1a1cqm4">This Physics fountain site is a <strong class="text-violet-400">Node.js, CANNON.JS, THREE.JS, React &amp; Vite.js</strong>
                    web application, hosted on
                    <strong class="text-violet-400">GitHub Pages</strong>, that
                    shows and interactive system that shows some specific requirements 
                    <strong class="text-violet-400">check how Physics interact with its environment,</strong>
                    where the user sees the system, Create a source of Physics Bodies.

                    Requirements:
                    
                    -The font starts with 0 &quot;particles&quot; and ends with &quot;N&quot; particles (at least 50)
                    
                    -The font is maintained indefinitely and reuses the particles!</p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-1v5l3ql"><h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1q8im4p">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return `<div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <h5${add_attribute("class", " text-2xl sm:text-3xl font-semibold text-center poppins ", 0)} data-svelte-h="svelte-11psba3">The <span class="text-violet-400">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full" data-svelte-h="svelte-1hp7xmr"><table class="bg-white text-slate-700 rounded text-center"><thead${add_attribute("class", "border-b border-solid border-slate-200  ", 0)}><tr class=""><th></th> <th class="whitespace-nowrap p-2 px-4">Candidate #1</th> <th class="whitespace-nowrap p-2 px-4">Candidate #2</th> <th class="whitespace-nowrap p-2 px-4">Candidate #3</th> <th class="bg-violet-700 text-white whitespace-nowrap p-4 px-8">Me</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Dedication</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Critical Thought</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Interpersonal Skills</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-t border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Progamming Ability</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50" data-svelte-h="svelte-zp0ubu"><p>Scroll to see more →</p></div> <p class="mx-auto" data-svelte-h="svelte-g5q3n9">So why not invest?</p></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
