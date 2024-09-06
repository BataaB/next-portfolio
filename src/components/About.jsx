import Image from "next/image";
import Tag from "./Tag";

const About = () => {
  return (
    <div id="about" className="px-20 py-24 bg-gray-50">
      <div className="px-8 flex flex-col gap-12">
        <div className="text-center">
          <Tag text="About me" />
        </div>
        <div className="flex gap-12">
          <div className="flex-1">
          <Image 
            className="shadow-[-40px_40px] shadow-gray-200"
            src="/about-image.png"
            width={400}
            height={480}
            alt="image of person"
          />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="font-semibold text-3xl text-gray-900">Curious about me? Here you have it:</h1>
            <div className="flex flex-col gap-4
                            font-normal text-base text-gray-600">
              <p>I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.</p>
              <p>Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.</p>
              <p>With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.</p>
              <p>Finally, some quick bits about me.</p>
              <ul className="flex gap-2.5 list-disc list-inside">
                <div className="flex-1 flex flex-col gap-2.5">
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </div>
                <div className="flex-1">
                  <li>Avid learner</li>
                </div>
              </ul>
              <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;