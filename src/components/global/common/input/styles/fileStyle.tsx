import styled from 'styled-components';

const FileStyle = styled.div`
    position: relative;
    display: inline-block;
    overflow: hidden;
    .btn {
        margin: 0;
        padding: 0px 20px;
        height: 40px;
        box-sizing: border-box;
        line-height: 1.2em;
        font-size: 16px;
        color: #888;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 1.5em;
        cursor: pointer;
    }
    .files {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
`;

export { FileStyle };
