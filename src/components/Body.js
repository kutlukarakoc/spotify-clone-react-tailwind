import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Library from "./Library";
import {useState} from "react";

const Body = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollHandler = () => {
        const scrollPos = document.getElementById("main").scrollTop;
        setScrollPosition(scrollPos);
    }

    return (
        <div className="flex flex-col relative w-full h-full bg-body-background scroll" style={{overflowY: "overlay"}} id="main" onScroll={scrollHandler}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/search">
                    <Search scrollPosition={scrollPosition}/>
                </Route>
                <Route path="/library">
                    <Library scrollPosition={scrollPosition}/>
                </Route>
            </Switch>
        </div>
    );
};

export default Body;