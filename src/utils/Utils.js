import {saveAs} from "file-saver"
const downloadFile = (response) => {
    const dirtyFileName = response.headers['content-disposition'];
    const regex = /filename[^;=\n]*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/;
    var  fileName = dirtyFileName.match(regex)[3];
    var blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, fileName);
};

export { downloadFile };

