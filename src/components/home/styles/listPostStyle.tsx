import styledComponent from 'styled-components';
const ListPostStyle = styledComponent.section`
    .img{
        &-cover{
            &-1{
                display: grid;
                grid-template-columns: repeat(8, 1fr);
                grid-template-rows: repeat(5, 3vw);
                // grid-gap: 5px;
                .gallery-item-1 {
                    grid-column-start: 1;
                    grid-column-end: 9;
                    grid-row-start: 1;
                    grid-row-end: 6;
                }
            }
            &-2{
                display: grid;
                grid-template-columns: repeat(8, 1fr);
                grid-template-rows: repeat(8, 3vw);
                // grid-gap: 5px;
                .gallery-item-1 {
                    grid-column-start: 1;
                    grid-column-end: 5;
                    grid-row-start: 1;
                    grid-row-end: 9;
                }
                .gallery-item-2 {
                    grid-column-start: 5;
                    grid-column-end: 9;
                    grid-row-start: 1;
                    grid-row-end: 9;
                }
            }
            &-3{
                display: grid;
                grid-template-columns: repeat(8, 1fr);
                grid-template-rows: repeat(8, 3vw);
                // grid-gap: 5px;
                .gallery-item-1 {
                    grid-column-start: 1;
                    grid-column-end: 5;
                    grid-row-start: 1;
                    grid-row-end: 5;
                }
                .gallery-item-2 {
                    grid-column-start: 5;
                    grid-column-end: 9;
                    grid-row-start: 1;
                    grid-row-end: 5;
                }
                .gallery-item-3 {
                    grid-column-start: 1;
                    grid-column-end: 9;
                    grid-row-start: 5;
                    grid-row-end: 9;
                }
            }
            &-4{
                display: grid;
                grid-template-columns: repeat(8, 1fr);
                grid-template-rows: repeat(8, 3vw);
                // grid-gap: 5px;
                .gallery-item-1 {
                    grid-column-start: 1;
                    grid-column-end: 5;
                    grid-row-start: 1;
                    grid-row-end: 5;
                }
                .gallery-item-2 {
                    grid-column-start: 5;
                    grid-column-end: 9;
                    grid-row-start: 1;
                    grid-row-end: 5;
                }
                .gallery-item-3 {
                    grid-column-start: 1;
                    grid-column-end: 5;
                    grid-row-start: 5;
                    grid-row-end: 9;
                }
                .gallery-item-4 {
                    grid-column-start: 5;
                    grid-column-end: 9;
                    grid-row-start: 5;
                    grid-row-end: 9;
                }
                .gallery-label{
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                }
            }
            &-5{
                display: grid;
                grid-template-columns: repeat(8, 1fr);
                grid-template-rows: repeat(8, 3vw);
                // grid-gap: 5px;
                .gallery-item-1 {
                    grid-column-start: 1;
                    grid-column-end: 5;
                    grid-row-start: 1;
                    grid-row-end: 5;
                }
                .gallery-item-2 {
                    grid-column-start: 5;
                    grid-column-end: 9;
                    grid-row-start: 1;
                    grid-row-end: 5;
                }
                .gallery-item-3 {
                    grid-column-start: 1;
                    grid-column-end: 5;
                    grid-row-start: 5;
                    grid-row-end: 9;
                }
                .gallery-item-4 {
                    grid-column-start: 5;
                    grid-column-end: 9;
                    grid-row-start: 5;
                    grid-row-end: 9;
                }
                .gallery-label{
                    position: absolute;
                    color: white;
                    font-size: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    z-index: 999;
                    height: 100%;
                }
            }
        }
        &-post{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    figure{
        margin: 1px !important;
        position: relative;
    }
    figure:hover .gallery-overlay {
        opacity: 0.1;
    }
    .gallery-overlay{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0.2;
        transition: .5s ease;
        background-color: black;
    }
    .gallery-more{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0.6;
        transition: .5s ease;
        background-color: black;
    }
    .post-content{
        padding: 20px;
    }
    .post-author{
        padding: 20px;
        border-bottom : 1px #e0e0e0 solid;
    }
`;

export default ListPostStyle;
