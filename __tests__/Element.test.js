import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import SearchBar from "../src/screens/SearchBar";
import User from "../src/screens/SearchBar/User";

// let findElement = function(tree, element){
//     let result = undefined;
//     for(node in tree.children){
//         if(tree.children[node].props.label==element){
//             result = true;
//         }
//     }
//     return true;
// }


// test("Finding element",()=>{
//     const tree = renderer.create(<SearchBar />).toJSON();
//     expect(findElement(tree,'label')).toBeDefined();
// })


// ==== API MOCKING ======

// === By resolve reject===
// test('API Test',async function(){
//     global.fetch= jest.fn().mockImplementation(()=>{
//         var p = new Promise((resolve, reject)=>{
//             resolve({
//                 json: function(){
//                     return {id:1}
//                 }
//             })
//         })
//         return p;
//     })
//     const response =await User.all()
//     expect(response.id).toBe(1)
// })

// === By async await===
test('API Test', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ id: 1 })
    });
  
    const response = await User.all();
  
    expect(response.id).toBe(1);
  });