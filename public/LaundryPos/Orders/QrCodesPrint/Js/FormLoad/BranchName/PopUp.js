const StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    if (jVarLocalBranchName == "" || jVarLocalBranchName === null) {
        swal.fire({
            title: "No Branch Name",
            icon: "error"
        });
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };