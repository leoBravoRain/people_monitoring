import ReactGA from "react-ga";

// initialize tracking for ga
export const initGA = () => {           

    // console.log("Init GA");
    
    ReactGA.initialize("UA-148958123-1"); 
};

// store the page visited by yser
export const PageView_GA = () => {  

    // console.log("page view");
    
    ReactGA.pageview(

        window.location.pathname

    ); 
}

// store events-actions of usre
export const Event_GA = (category, action, label) => {

    ReactGA.event({
      category: category,
      action: action,
      label: label
    });
    
  };