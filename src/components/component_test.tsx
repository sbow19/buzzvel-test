"use client";
import { BlobOne, BlobTwo } from "@/components/graphics/blob";
import { ButtonTemplate } from "@/components/buttons/button_template";
import { DemoButton, CTAButton, OrangeButton } from "@/components/buttons/default_buttons";
import { appStyles } from "@/components/styles/prog_styles";
import { LessonCard } from "@/components/cards/lesson_card";
import { SpeechBubbles } from "@/components/graphics/speech_bubbles";
import { TestimonialCard } from "@/components/cards/testimonial_card";
import { Stroke } from "@/components/graphics/stroke";
import { DemoForm } from "@/components/form/demo_form.";
import { VideoContainer } from "@/components/media/video_container";

export const Test = () => {
  return (
    <>
      {/* <BlobOne
        imagePath="/student_phone.png"
        alternativeText="Teacher on computer"
      /> */}
      {/* <BlobTwo
        imagePath="/images/teacher_laptop.png"
        alternativeText="Teacher on computer"
      /> */}
      {/* <OrangeButton
      
        onClick={()=>{
            // TODO: implement logic
        }}
     
        text="Sign up now"
      /> */}
      {/* <DemoButton
        onClick={()=>{

        }}
        text="View demo"
      /> */}
      {/* <LessonCard
        bannerText="Featured"
        headerText="The map of mathematics"
        contentText="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        bannerBackgroundColor={appStyles.LessonCardBanner.purple.background}
        bannerTextColor={appStyles.LessonCardBanner.purple.text}
        onClick={() => {}}
      />
      <LessonCard
        bannerText="Popular"
        headerText="Design for how people think"
        contentText="Aliquam ut euismod condimentum elementum ultricies volutpat sit non. "
        bannerBackgroundColor={appStyles.LessonCardBanner.blue.background}
        bannerTextColor={appStyles.LessonCardBanner.blue.text}
        onClick={() => {}}
      /> */}
      {/* <LessonCard
        bannerText="New"
        headerText="International & Commercial Law"
        contentText="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui."
        bannerBackgroundColor={appStyles.LessonCardBanner.green.background}
        bannerTextColor={appStyles.LessonCardBanner.green.text}
        onClick={() => {}}
      /> */}
      {/* <SpeechBubbles/> */}

      {/* <TestimonialCard
        testimonial={test1}
      /> */}
      {/* <TestimonialCard
        testimonial={test2}
      /> */}
      {/* <CTAButton
        text="View all the features"
        onClick={()=>{

        }}
      /> */}
      {/* <CTAButton
        text="Explore teachers and students"
        onClick={()=>{
          
        }}
      /> */}
      {/* <Stroke
        stretchX={1.1}
        stretchY={1.1}
        
      /> */}
      {/* <DemoForm/> */}
      {/* <VideoContainer></VideoContainer> */}
    </>
  );
};

const test1: Testimonial = {
  testimonialName: "Ralph Edwards",
  testimonialOccupation: "Math Teacher",
  testimonialText: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
  profileImageSrc: "/images/profiles/ralph.png"
}

const test2: Testimonial = {
  testimonialName: "Hellen John",
  testimonialOccupation: "sychology Student",
  testimonialText: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
  profileImageSrc: "/images/profiles/hellen_john.png"
}
