import Link from 'next/link';
import { Navbar } from "@nextui-org/react"; 

const NavNextUI = () => {
    return (
        <div className='bg-violet-600'>

            <Navbar className="p-4 flex justify-between items-center px-8 max-w-[1200px] mx-auto">
                <Link href="/">
                
                    <h1>Conecturma</h1>
                
                </Link>
                
                <div className="hidden md:flex space-x-4 text-sm uppercase font-semibold leading-snug text-white">
                    
                    <Link href="/sobre" className='px-4 hover:font-bold'>
                        
                        Sobre
                        
                    </Link>
                    <Link href="/jogo" className='px-4 hover:font-bold'>
                        
                        Jogo
                        
                    </Link>
                    <Link href="/videos" className='px-4 hover:font-bold'>
                        
                        Vídeos
                        
                    </Link>

                    <Link href="/creditos" className='px-4 hover:font-bold'>
                        
                        Créditos
                        
                    </Link>
                </div>
            </Navbar>
        </div>
      
    );
  };
  
  export default NavNextUI;