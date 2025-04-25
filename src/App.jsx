import Header from "./components/Header/Header"
import TeachingSection from "./components/TeachingSection"
import ButtonSection from "./components/ButtonSection"
import IntroSection from "./components/introSection"
import TabsSection from "./components/TabsSection"
import Feedback from "./components/Feedback"
import { useState } from "react"
import EffectSection from "./components/EffectSection"

export default function App(){
  const [tab, setTab] = useState("effect")

  return (
    <>
      <Header/>
        <main>
          <IntroSection/>
          <TabsSection active={tab} onChange={(current)=>setTab(current)}/>

          {tab == "main" && (
            <>
              <TeachingSection/>
              <ButtonSection/>
            </>
          )}
          
          {tab == "feedback" && (
            <>
              <Feedback/>
            </>
          )}

          {tab == "effect" && (
            <>
              <EffectSection/>
            </>
          )}
        </main> 
    </>
  )
}