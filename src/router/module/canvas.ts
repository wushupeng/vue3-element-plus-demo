const components = import.meta.glob("@pages/**/index.vue");
console.log(components);
const About = { template: "<div>About</div>" };
export const canvasRouter = [{ path: "/about", component: About }];
