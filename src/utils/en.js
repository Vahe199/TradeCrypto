export default {
    send:{
        title:'You send',
        tab:[{label:"All"},{label:"Crypto"},{label:"Banks"},{label:"PS"}]
    },
    receive:{
        title:'You receive',
        tab:[{label:"All"},{label:"Banks"},{label:"PS"}],
        button:{title1:'Reserve',
                title2:'Exchange Rates'
        }
    },
    exchange:{
        title:'You receive',
        tab:[{input_label:"You send"},{input_label:"You receive"}],
        exRate:{
            rate:"Exchange rate",
            maxExchange:"Max. exchange amount",
            minExchange:"Min. exchange amount"
        }
    },
    details: {
        title: 'You receive',
        tab: [{input_label: "E-mail"}, {input_label: "Recipient's full name"},{input_label: "Bank Card"},
            {checkbox_label: " the terms of exchange and processing of personal data",lab_title:"I consent to"}],
        button: {title: "EXCHANGE"}
    },
    login: {
        title: 'Login',
        description:"Enter your E-mail and password for authorization on the website",
        tab: [{input_label: "E-mail"}, {input_label: "Password"}],
        button: {title: "LOG IN"},register:"Sign up",forget:"Forgot password?",
        attention:{title:"Attention! ",
            desc:"Please contact us via the chat if you did not find the answer to your question on our website or you need to urgently solve the problem! Operators are in touch around the clock, we reply instantly!"}
    },
    registration: {
        title: 'Sign up',
        description:"Enter your E-mail and password for authorization on the website",
        tab: [{input_label: "E-mail"}, {input_label: "Password"},{input_label: "Repeat password"}],
        button: {title: "SIGN UP"},
        register:"Log in to your personal account",
        forget:"Back",
        attention:{title:"Attention! ",
            desc:"Please contact us via the chat if you did not find the answer to your question on our website or you need to urgently solve the problem! Operators are in touch around the clock, we reply instantly!"
        }
    },
    personal: {
        title: 'Password recovery',
        description:"Enter the E-mail provided upon sign up",
        tab: [{input_label: "E-mail"}],
        button: {title: "SEND"},
        register:"Log in to your personal account",
        attention:{title:"Attention! ",
            desc:"Please contact us via the chat if you did not find the answer to your question on our website or you need to urgently solve the problem! Operators are in touch around the clock, we reply instantly!"
        }
    },
    reset: {
        title: 'New password',
        description:"Enter new password",
        tab: [ {input_label: "Password"},{input_label: "Repeat password"}],
        button: {title: "CHANGE PASSWORD"},
        register:"Log in",
        attention:{title:"Attention! ",
            desc:"Please contact us via the chat if you did not find the answer to your question on our website or you need to urgently solve the problem! Operators are in touch around the clock, we reply instantly!"
        }
    },

}
