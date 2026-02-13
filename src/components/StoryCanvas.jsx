import React from 'react';

const StoryCanvas = React.forwardRef(({ message }, ref) => {
    return (
        <div
            ref={ref}
            style={{
                width: '1080px',
                height: '1920px',
                background: 'linear-gradient(180deg, #FF1F7C 0%, #FF9B42 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                left: '-10000px', // Move further away
                top: 0,
                fontFamily: "'Outfit', sans-serif"
            }}
        >
            <div style={{
                backgroundColor: 'white',
                borderRadius: '80px',
                width: '850px',
                boxShadow: '0 40px 100px rgba(0,0,0,0.2)',
                overflow: 'hidden'
            }}>
                <div style={{
                    background: 'linear-gradient(180deg, #FF1F7C 0%, #FF9B42 100%)',
                    color: 'white',
                    padding: '80px 40px',
                    textAlign: 'center',
                    fontWeight: '900',
                    fontSize: '48px',
                    lineHeight: '1.2'
                }}>
                    bana anonim olarak mesajlar gönder!
                </div>
                <div style={{
                    padding: '100px 40px',
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: '52px',
                    color: 'black',
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1.4'
                }}>
                    {message}
                </div>
            </div>

            <div style={{
                marginTop: '150px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px'
            }}>
                <div style={{
                    fontWeight: '900',
                    fontSize: '70px',
                    fontStyle: 'italic',
                    color: 'white'
                }}>
                    NGL
                </div>
                <div style={{
                    color: 'white',
                    fontSize: '32px',
                    fontWeight: '600',
                    opacity: 0.8
                }}>
                    anonymous q&a
                </div>
            </div>
        </div>
    );
});

export default StoryCanvas;
