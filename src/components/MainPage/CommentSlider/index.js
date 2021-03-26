import * as React from "react"
import PropTypes from "prop-types"
import { memo as Memo,useRef,useEffect} from 'react'
import CommentsSectionStyle from './style'
import gsap from "gsap";
import Image from '../../Image'

const CommentsSection = Memo( props => {
    const refArr = useRef([]);

    useEffect(() => {
        gsap.set(refArr.current[0],{css:{translateX:'-50%',scaleX:0.5,scaleY:0.5}})
        gsap.set(refArr.current[1],{css:{translateX:'-50%',scaleX:1,scaleY:1}})
        gsap.set(refArr.current[2],{css:{translateX:'-50%',scaleX:0.5,scaleY:0.5}})
    }, [])
    
    const storeComments = (comms) => {
        return comms.map((item,index)=>{
            return(
                <div ref={(ref) => refArr.current.push(ref)} className='single-comment flexBoxColumn alignMiddle' key={index}>
                    <p className='com fontMedium'>{item.comment}</p>
                    <Image src={item.avatar} alt='avatar'/>
                    <p className='role fontBold'>{item.role}</p>
                    <Image className='comp-logo' src={item.companyLogo} alt='logo'/>
                </div>
            )
        })
    }

    let on = 0; 
    let time = 500;
    let pos = 1;
    let pos2 = 2;
    let pos3 = 3;

    const leftClick = () => {
        rotateLeft();
        on = 1;
    }
    
    const rightClick = () => {
        rotateRight();
        on = 1;
    }
    
    const rotateLeft = () => {
        if(on == 0){
            gsap.set(pos === 1 ? refArr.current[0] : pos === 2 ? refArr.current[1] : refArr.current[2],{css:{left:'80%'}});
            gsap.set(pos === 1 ? refArr.current[0] : pos === 2 ? refArr.current[1] : refArr.current[2],{css:{zIndex:0}});
            gsap.set(pos2 === 1 ? refArr.current[0] : pos2 === 2 ? refArr.current[1] : refArr.current[2],{css:{left:'20%'}});

            setTimeout (() =>{
                gsap.set(pos2 === 1 ? refArr.current[0] : pos2 === 2 ? refArr.current[1] : refArr.current[2],{css:{translateX:'-50%',scale:0.5}});
                gsap.set(pos2 === 1 ? refArr.current[0] : pos2 === 2 ? refArr.current[1] : refArr.current[2],{css:{zIndex:1},delay:0.5});
                pos++;
                pos2++;
                pos3++;
                if(pos > 3){pos = 1}
                if(pos2 > 3){pos2 = 1;}
                if(pos3 > 3){pos3 = 1;}
            },100)
            
            gsap.set(pos3 === 1 ? refArr.current[0] : pos3 === 2 ? refArr.current[1] : refArr.current[2],{css:{translateX:'-50%',scaleX:1,scaleY:1,left:'50%', zIndex:2},delay:0.3});
            setTimeout (()=>{
                on = 0; 
            },time)
        }
    }
    
    const rotateRight = () => {
        if(on == 0){
            gsap.set(pos3 === 1 ? refArr.current[0] : pos3 === 2 ? refArr.current[1] : refArr.current[2],{css:{left:'20%'}});
            gsap.set(pos3 === 1 ? refArr.current[0] : pos3 === 2 ? refArr.current[1] : refArr.current[2],{css:{zIndex:0}});
            gsap.set(pos2 === 1 ? refArr.current[0] : pos2 === 2 ? refArr.current[1] : refArr.current[2],{css:{left:'80%'}});
            
            setTimeout (() => {
                gsap.set(pos2 === 1 ? refArr.current[0] : pos2 === 2 ? refArr.current[1] : refArr.current[2],{css:{translateX:'-50%',scale:0.5}});
                gsap.set(pos2 === 1 ? refArr.current[0] : pos2 === 2 ? refArr.current[1] : refArr.current[2],{css:{zIndex:0},delay:0.5});
                pos--;
                pos2--;
                pos3--;
                if(pos < 1 ){pos = 3}
                if(pos2 < 1){pos2 = 3;}
                if(pos3 < 1){pos3 = 3;}
            },100)
            
            gsap.set(pos === 1 ? refArr.current[0] : pos === 2 ? refArr.current[1] : refArr.current[2],{css:{translateX:'-50%',scaleX:1,scaleY:1,left:'50%', zIndex:1},delay:0.3});
            setTimeout (()=>{
                on = 0; 
            },time)
        }
    }

    return (
        <CommentsSectionStyle>
            <div className={`slider`}>
                {storeComments(props.comments)}
            </div>
            <div onClick={() => leftClick()} className='sl-btn left'></div>
            <div onClick={() => rightClick()} className='sl-btn right'></div>
        </CommentsSectionStyle>
    )
} )

CommentsSection.propTypes = {
    comments:PropTypes.array
}

export default CommentsSection;