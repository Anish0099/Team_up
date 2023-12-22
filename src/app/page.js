import Image from 'next/image'

export default function Home() {
  return (
      <main className="bg-[#111111] text-[#FFFFFF] px-[30px] py-[30px] relative w-screen h-screen">
          <header className=" p-[10px] flex justify-between center px-0 py-[10px]">
              <div className="w-[139px] h-[37px]"><img src="/logo.png" /></div>
              <nav className="">
                  <ul className=" flex justify-center items-center list-none">
                      <li className="mr-[30px] text-[18px]">About Us</li>
                      <li className=" text-[18px]">Contact</li>
                  </ul>
              </nav>
          </header>
          <div className="mt-[30px] ml-[130px]">
              <img src="/Vector 1.png" />
          </div>
          <div>
              <img className="absolute rotate-[380deg] top-[2px] right-[180px] h-[620px] w-[800px] mr-[10px]" src="/Vector 2.png" />
          </div>
          <div>
              <img className="absolute rotate-[150deg] h-[241px] w-[431px] right-[180px]" src="/Vector 2.png" />
          </div>

          <main className="h-[400px] flex justify-end flex-col items-start absolute top-[260px]">
              <div className="text-[64px] font-semibold h-[285px] w-[678px] leading-[1.4]">
                  Perfect Platform
                  to collaborate like minded peoples

              </div>
              <div className="mt-[10px] leading-[1.4] h-[65px] w-[576px] text-[#808080] text-[16px]">
                  Where Ideas Converge and Collaborators Unite. Empowering individuals to transform visions into reality
                  through the strength of teamwork

              </div>
              <button class="h-[50px] w-[170px] bg-[#ffffff] text-[#111111] rounded-[12px] text-[19px] font-semibold mt-[20px]">
                  Get started

              </button>

          </main>
      </main>


)
}
