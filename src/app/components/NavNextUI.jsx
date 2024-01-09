import Link from 'next/link';
import { Navbar } from "@nextui-org/react"; 

const NavNextUI = () => {
    return (
        <div className='bg-violet-600'>

            <Navbar className="p-4 flex justify-between items-center px-8 max-w-[1200px] mx-auto">
                <Link href="/">
                
                    <h1>Logo!</h1>
                
                </Link>
                
                <div className="hidden md:flex space-x-4 text-sm uppercase font-semibold leading-snug text-white">
                    
                    <Link href="/historia" className='px-4 hover:font-bold'>
                        
                        História
                        
                    </Link>
                    <Link href="/jogo" className='px-4 hover:font-bold'>
                        
                        Jogo
                        
                    </Link>
                    <Link href="/contato" className='px-4 hover:font-bold'>
                        
                        Contato
                        
                    </Link>
                </div>
            </Navbar>
        </div>
      
    );
  };
  
  export default NavNextUI;