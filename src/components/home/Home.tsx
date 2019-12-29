import React from "react";
import Card from "../global/style/Card";
interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Card padding="20" margin="30">
            Home
          </Card>
        </div>
      </div>
    </div>
  );
};
