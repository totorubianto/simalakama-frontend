import React, { ReactElement } from 'react';
import { Text, getTheme, FontWeights } from 'office-ui-fabric-react';
interface Props {
    error?: any;
}

function errorData({ error }: Props): ReactElement {
    const theme = getTheme();
    var errors: any = {};
    if (error) for (let i = 0; i < error.length; ++i) errors = error[i];
    return (
        <>
            {errors?.constraints &&
                Object.keys(errors.constraints).map((data: any, i: number) => (
                    <div key={i}>
                        <Text
                            variant="medium"
                            styles={{
                                root: { color: theme.palette.red, fontWeight: FontWeights.bold },
                            }}
                        >
                            {errors.constraints[data]}
                        </Text>
                    </div>
                ))}
        </>
    );
}
const checkErrors = (data: any, error: any) => {
    let result;
    if (error?.length > 0) {
        result = error.filter((obj: any) => {
            return obj.property === data;
        });
    }
    if (result) return result;
};

export { errorData, checkErrors };
