import { ComponentProps } from "react";

export default function AboutSection(props: ComponentProps<"section">) {
  return (
    <section {...props}>
      <div className="flex flex-col flex-nowrap gap-[20px]  justify-start overflow-visible max-w-[1400px] w-full ">
        <div className="outline-none flex justify-start flex-col opacity-1 flex-shrink-0">
          <h1 className="">My name is Dana</h1>
        </div>
        <div className="outline-none flex flex-col justify-start opacity-1 flex-shrink-0">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-none flex-row gap-[15px] justify-start visible p-0">
          <div>hello</div>
          <div>hello</div>
        </div>
      </div>
    </section>
  );
}
