import styledComponent from 'styled-components';
const NavbarStyle = styledComponent.div`
  -webkit-box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
  -moz-box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
  box-shadow: 1px 10px 51px -1px rgba(153, 153, 153, 0.28);
  border-bottom: 1px solid #e6e6e6;
  background: white;

  .nav {
    display: flex;
    &-brand {
      background: white;
      font-weight:800;
    }
    &-wrapper {
      display: flex;
      width: 100%;
      &-start {
        display: flex;
        justify-content: flex-start;
        width: 100%;
      }
      &-end {
        display: flex;
        justify-content: flex-end;
        width: 100%;
      }
    }
    &-link {
        margin-right:10px;
        margin-left:10px;
      height: 60px;
      display: flex;
      align-items: center;
      &-* {
        height: 100% !important;
      }
    }
    &-search{
        height: 40px;
        width:350px;
    }
    .ms-TextField{
        &-wrapper{
            height:100%;
        }
        &-field{
            height:100%;
        }
        &-fieldGroup{
            height:100%;
        }
        .icon-60{
            height:55%;
        }
    }
  }
`;

export default NavbarStyle;
