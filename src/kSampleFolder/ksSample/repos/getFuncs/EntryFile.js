import {
    GetFunc as GetFuncDal, GetDataOnlyFunc as GetDataOnlyFuncDal,
    GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncDal,
    GetFromModalFunc as GetFromModalFuncDal,
    GetIdFunc as GetIdFuncDal, GetBodyCheckFunc as GetBodyCheckFuncDal,
    GetRowDataFunc as GetRowDataFuncDal, GetRowCountByIdFunc as GetRowCountByIdFuncDal, GetRowCountFunc as GetRowCountFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = async () => {
    return GetFuncDal();
};

let GetDataOnlyFunc = async () => {
    return GetDataOnlyFuncDal();
};

let GetIdFunc = ({ inId }) => {
    return GetIdFuncDal({ inId });
};

let GetRowCountByIdFunc = ({ inKey, inId }) => {
    return GetRowCountByIdFuncDal({ inKey, inId });
};

let GetRowDataFunc = ({ inKey, inId }) => {
    return GetRowDataFuncDal({ inKey, inId });
};

let GetFromModalFunc = () => {
    return GetFromModalFuncDal();
};

let GetFromModalUuidFunc = () => {
    return GetFromModalUuidFuncDal();
};

let GetFromModalUuidAndTSFunc = () => {
    return GetFromModalUuidAndTSFuncDal();
};

let GetBodyCheckFunc = async () => {
    return GetBodyCheckFuncDal();
};

let GetRowCountFunc = () => {
    return GetRowCountFuncDal();
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc, GetBodyCheckFunc, GetRowCountFunc, GetRowDataFunc, GetRowCountByIdFunc
};