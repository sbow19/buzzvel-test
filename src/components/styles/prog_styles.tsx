/*
    Object of styles to be applied programmatically
*/

const colors = {
  blue_gray: "#0F172A",
  orange: "#EA580C",
  yellow: "#FACC15",
  blue: "#2563EB",
  white: '#fff'
};

export const appStyles = {
    // Orange sign up button
    ButtonOne: {
        backgroundColor: colors.orange,
        color: colors.white,
        borderColor: colors.orange,
    },

    HeaderSignUpButton: {
        backgroundColor:  colors.white,
        color: colors.blue_gray,
        borderColor: colors.blue_gray
    },

    LessonCardBanner: {
        purple: {
            text: "#6B21A8",
            background: "#F3E8FF"
        },
        blue: {
            text: "#1E40AF",
            background: "#DBEAFE"

        },
        green: {
            text: "#166534",
            background: "#DCFCE7"

        }
    },
    orangeBlob:{
        blobFill:"#FB923C",
        spotFill: "#FACC15"
    }
}


