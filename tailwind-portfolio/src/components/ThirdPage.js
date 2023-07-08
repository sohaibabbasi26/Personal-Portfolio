import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';
import Image from 'next/image';

const ThirdPage = ({darkMode}) => {

    return (

        <div className={darkMode ? 'dark' : ''}>
        <div className="p-10 text-center">
            <h3 className="text-3xl py-1 font-bold dark:text-white">Portfolio</h3>
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

        <div className='flex flex-col lg:flex-row lg:flex-wrap lg:gap-10'>
            <div className='sm:py-2 mx-10 basis-1/3 flex-1'>
                <Image src={web1} className='rounded-xl object-cover' width={500} height={500} />
            </div>

            <div className='sm:py-2 mx-10 basis-1/3 flex-1'>
                <Image src={web2} className='rounded-xl object-cover' width={500} height={500} />
            </div>

            <div className='sm:py-2 mx-10 basis-1/3 flex-1 '>
                <Image src={web3} className='rounded-xl object-cover' width={500} height={500} />
            </div>

            <div className='sm:py-2 mx-10 basis-1/3 flex-1'>
                <Image src={web4} className='rounded-xl object-cover' width={500} height={500} />
            </div>

            <div className='sm:py-2 mx-10 basis-1/3 flex-1'>
                <Image src={web5} className='rounded-xl object-cover' width={500} height={500} />
            </div>

            <div className='sm:py-2 mx-10 basis-1/3 flex-1'>
                <Image src={web6} className='rounded-xl object-cover' width={500} height={500} />
            </div>
        </div>

        </div>
    )
}

export default ThirdPage;