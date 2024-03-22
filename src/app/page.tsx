import Body from "./Body/Body";

export default function Home() {
  return (
    <>
    <div className="mt-10 w-full inline-block">
      <div className="text-[12px] flex gap-2 md:hidden mb-4 ml-4">
        <p className="text-[#BFC8CD]">HOME |</p>
        <p>SHOP</p>
      </div>
      <h1 className="text-black text-[24px] md:text-[60px] font-normal text-center">
        DISCOVER OUR PRODUCTS
      </h1>
      <p className="text-center text-[16px] md:text-[22px] font-light text-[#252020] mt-4 px-4 md:px-0">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />{" "}
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </div>
    <Body/>
    </>
  );
}
