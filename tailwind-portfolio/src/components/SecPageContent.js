import Image from "next/image";
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import design from '../../public/design.png';

const SecPageContent = ({darkMode}) => {

    const cardClassName = darkMode ? 'text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 dark:shadow-md' : 'text-center shadow-lg p-10 rounded-xl my-10';


    return (
        <>
            <div className={darkMode ? 'dark' : ''}>
                <h3 className="text-3xl py-1 font-bold dark:text-white">Services I offer</h3>
                <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-300">
                    My journey as a Full-stack developer, I have worked on many projects remotely.
                    I'm currently working in
                    {" "}
                    <span className="text-teal-500">
                        {" "}
                        Tixsee Labs LLC
                        {" "}
                    </span>
                    {" "}
                    since february as a mern-stackdeveloper and
                    {" "}
                    <span className="text-teal-500">
                    {" "}
                        collaborated with talented people in real production-environment.
                    </span>
                </p>

                <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-300">
                    I offer from a wide range of services, including development and teaching.
                </p>
            </div>
            <div className="lg:flex gap-10">
                <div className="text-center shadow-lg p-10 rounded-xl my-10 py-3 dark:shadow-gray-300">
                    <Image src={design} width={100} height={100} className="mx-auto" />
                    <h3 className="text-lg pt-8 pb-2 font-medium dark:text-white">Beautiful Designs</h3>
                    <p className="py-2 dark:text-gray-300">Will develop the best suited designs for your design theories.</p>
                    <h4 className="py-4 text-teal-600">Development tools i use:</h4>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Illustrator</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 py-3 dark:shadow-gray-300">
                    <Image src={consulting} width={100} height={100} className="mx-auto" />
                    <h3 className="text-lg pt-8 pb-2 font-medium dark:text-white">Beautiful Designs</h3>
                    <p className="py-2 dark:text-gray-300">Will develop the best suited designs for your design theories.</p>
                    <h4 className="py-4 text-teal-600">Development tools i use:</h4>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Illustrator</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
                </div>
                <div className="text-center shadow-lg p-10 rounded-xl my-10 py-3 dark:shadow-gray-300">
                    <Image src={code} width={100} height={100} className="mx-auto" />
                    <h3 className="text-lg pt-8 pb-2 font-medium dark:text-white">Beautiful Designs</h3>
                    <p className="py-2 dark:text-gray-300">Will develop the best suited designs for your design theories.</p>
                    <h4 className="py-4 text-teal-600">Development tools i use:</h4>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Illustrator</p>
                    <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
                </div>
            </div>
        </>
    )
}

export default SecPageContent;