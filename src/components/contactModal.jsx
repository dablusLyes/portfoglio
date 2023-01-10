import React from 'react';

const ContactModal = React.forwardRef((props,ref) => {
    console.log(ref);
    return (
        <div ref={ref} className=' modal-background'>
            <div onClick={()=> false } className="modal">
                <div className="content">
                    <button>Linkedin</button><button>Gmail</button><button>Github</button>
                </div>
                <button onClick={()=>{props.toggleClose()}} className="closebtn">x</button>
            </div>
        </div>
    );
})

export default ContactModal;
