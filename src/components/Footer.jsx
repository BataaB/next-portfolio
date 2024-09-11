import CopyrightIcon from "@/icons/CopyrightIcon";

const Footer = ({ theme }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 px-20 py-6">
      <div className="w-full px-8 flex justify-center items-center gap-2">
        <CopyrightIcon theme={theme}/>
        <p className="">2024 | Greetings with ❤️️ from Ulaanbaatar</p>
      </div>
    </div>
  );
}

export default Footer;