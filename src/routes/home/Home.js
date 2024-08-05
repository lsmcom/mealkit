import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id : 'intro', title : '밀키트'},
  { id : 'best', title : '대표제품'},
  { id : 'new', title : '신제품'},
  { id : 'site', title : '사이트추천제품'},
  { id : 'today', title : '당일추천제품'},
  { id : 'review', title : '제품리뷰'},
]

const Home = () => {
  const [ activeSection, setActiveSection ] = useState(0)
  const [ showTooltip, setShowTooltip ] = useState(null)
  const sectionRefs = useRef(sections.map(()=>React.createRef()))

  useEffect(()=>{
      const handleScroll = ()=>{
        const pageYOffset = window.pageYOffset;

        let newActiveSection = 0; 
        sectionRefs.current.forEach((ref, index)=>{
          if(ref.current.offsetTop <= pageYOffset + 100){
            newActiveSection = index
          }
          // console.log( newActiveSection )
        })

        setActiveSection( newActiveSection )
      }

      window.addEventListener('scroll', handleScroll);
      return ()=> window.removeEventListener('scroll', handleScroll)
  }, [])


  const scrollToSection = (index)=>{
    sectionRefs.current[index].current.scrollIntoView({
       behavior : 'smooth'
    })
  }
  return (
      <div className='relative'>
        {/* indecator */}
        <div className='fixed right-4 top-1/2 transform translate-y-1/2 z-50'> 
            {
              sections.map(( section, index )=>(
                <div   key={section.id}
                       className='relative'
                >
                    <motion.div className='w-3 h-3 rounded-full cursor-pointer overflow-hidden'>
                      <AnimatePresence>
                        {section.title}
                        <div className='bg-red-200 w-3 h-3'
                            onClick={()=>scrollToSection(index)}
                        ></div>
                      </AnimatePresence>
                    </motion.div>
                </div>
              ))
            }  
        </div>

        {/* sections */}
        {
          sections.map((section, index)=>(
            <motion.section key={section.id}
                            ref={ sectionRefs.current[index] }
                            className='h-screen w-full'
            >
            section, { index }
            </motion.section>
          ))
        }
      </div>
  )
}

export default Home