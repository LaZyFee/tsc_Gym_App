import Logo from "@/assets/Logo.png";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                        Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.
                    </p>
                    <p>© Rabiul Rafee || 2025.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <div className='flex gap-4 items-center mb-4 hover:text-pink-600'>
                        <MdEmail />
                        <a href="mailto:rhr277@gmail.com" target="_blank" rel="noopener noreferrer">rhr277@gmail.com</a>
                    </div>
                    <div className='flex gap-4 items-center mb-4 hover:text-pink-600'>
                        <FaLinkedin />
                        <a href="https://www.linkedin.com/in/rabiul-rafee-361224183" target="_blank" rel="noopener noreferrer">rabiul-rafee-361224183</a>
                    </div>
                    <div className='flex gap-4 items-center mb-4 hover:text-pink-600'>
                        <FaGithub />
                        <a href="https://github.com/LaZyFee" target="_blank" rel="noopener noreferrer">github.com/LaZyFee</a>
                    </div>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Bahaddarhat, Chottogram, Bangladesh.</p>
                    <p>(+88)0163656789</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;