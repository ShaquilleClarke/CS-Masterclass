const sortedArrayToBST = (nums, start=0, end=nums.length-1) => {
    if(start > end) return null;
    let mid = Math.floor((start + end)/2), root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums, start, mid-1);
    root.right = sortedArrayToBST(nums, mid+1, end);
    return root;
}
