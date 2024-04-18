export const apiList = {
  profile:{
    url:()=>'users/profile',
    method:'GET'
  },
  all:{
    url:()=>'admin/country/all',
    method:'POST'
  },
  roleList:{
    url:()=>'admin/role/list',
    method:'POST'
  },
  login:{
    url:()=>'api/login',
    method:'POST'
  },
  commonUrl : (module) => ({
    list:{
      url: () => `admin/${module}`,
      method:'POST',
    },
    isToggle:{
      url:()=>`admin/users/partial-update/${module}`,
      method:'PATCH'
    },
    profileUpdate:{
      url:()=>`api/${module}`,
      method:'POST'
    }
  })
}


