declare module "*.glsl" {
  const content: string;
  export default content;
}


// Declare the module temporarily
declare module 'tailwindcss-scoped-groups' {
  const plugin: (options: { groups: string[] }) => unknown;
  export default plugin;
}