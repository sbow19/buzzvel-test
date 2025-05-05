declare global {
  type Testimonial = {
    profileImageSrc: string;
    testimonialText: string;
    testimonialName: string;
    testimonialOccupation: string;
  };

  /* Component props */

  type BannerBadgeProps = {
    bannerBackgroundColor: string;
    bannerTextColor: string;
    bannerText: string;
  };

  type ButtonTemplateProps = {
    onClick:  ()=>void
    height: number
    width: number
    textColor: string
    backgroundColor: string
    borderColor: string
    text: string
    textStyle: string[]
  }

  type TestimonialProps = {
    testimonial: Testimonial;
  };

  type DefaultButtonProps = {
    onClick: ()=>void
    ariaLabel?: string
    text?: string
  }

  type LessonCardProps = {
    headerText: string
    contentText: string
    onClick: ()=>void
    variants: {
      [key: string]: any
    }

    /* BannerBadge styles */
    bannerText: string
    bannerTextColor: string
    bannerBackgroundColor: string

    
  }

  type LinkObject = {
    name: string;
    link: string;
    badge: React.ReactElement | null;
  };

  type FooterLinkObject = {
    title: string;
    subPaths: LinkObject[];
  };

  /* Canvas collage graphics */
  type SourceItem = {
    /* 
      Relative path to asset
    */
    src: string;

    /**
     * type of asset - e.g. image, svg or else
     *
     * Only implemented image handling for rendering onto canvas
     */
    type: string;
  };

  type BoundingBox = {
    topLeft: { x: number; y: number };
    bottomRight: { x: number; y: number };
  };
}

export {};
