main();
function main(){
    var selectedStr = Editor.GetSelectedString(0);
    
    //正規表現文字エスケープ
    selectedStr = selectedStr.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');

    Editor.ReplaceAll('^(?!.*' + selectedStr + ').*[\\r\\n]*', '', 28);
    Editor.ReDraw();
}
