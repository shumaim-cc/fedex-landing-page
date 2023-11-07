'use client'
import React from 'react'
import { AccordionItemState } from 'react-accessible-accordion';
import Expand from '../Icons/Expand'
import Collapse from '../Icons/Collapse'
import styles from './FAQs.module.sass'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'



interface FAQSProps {
  title: string
  question: string
  paragraph: string
}

const FAQS = ({ paragraph, title, question }: FAQSProps) => {
  return (
    
      <div className={styles.faqbox}>
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton
                className={styles.accordionbtn} >
                <h2>{title}</h2>
                <AccordionItemState>
                  {({ expanded }) => (expanded ? <Collapse /> : <Expand />)}
                </AccordionItemState>
                
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <h2>{question}</h2>
              <p>{paragraph}</p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
  )
}

export default FAQS
