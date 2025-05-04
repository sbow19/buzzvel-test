declare global {

    type Testimonial = {
      profileImageSrc: string;
      testimonialText: string;
      testimonialName: string;
      testimonialOccupation: string;
    };
    
    type TestimonialProps = {
        testimonial: Testimonial
    }
}

export {}