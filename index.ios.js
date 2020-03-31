/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const JitsiMeetView = requireNativeComponent('RNJitsiMeetView');
export const JitsiMeetModule = NativeModules.RNJitsiMeetView;
const call = JitsiMeetModule.call;
const huddleCall = JitsiMeetModule.huddleCall;
const audioCall = JitsiMeetModule.audioCall;
JitsiMeetModule.call = (url, userInfo) => {
  userInfo = userInfo || {};
  call(url, userInfo);
}
JitsiMeetModule.audioCall = (url, userInfo) => {
  userInfo = userInfo || {};
  audioCall(url, userInfo);
}
JitsiMeetModule.huddleCall = (url, huddleInfo) => {
  huddleInfo = huddleInfo || {};
  huddleCall(url, huddleInfo);
}
export default JitsiMeetModule;


