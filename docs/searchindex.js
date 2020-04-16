Search.setIndex({docnames:["canine/adapters","canine/backends","canine/index","canine/localization","canine/utils","canine/xargs","index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["canine/adapters.rst","canine/backends.rst","canine/index.rst","canine/localization.rst","canine/utils.rst","canine/xargs.rst","index.rst"],objects:{"":{canine:[2,0,0,"-"]},"canine.Orchestrator":{fill_config:[2,2,1,""],job_avoid:[2,2,1,""],run_pipeline:[2,2,1,""],stringify:[2,2,1,""]},"canine.adapters":{FirecloudAdapter:[0,1,1,""],ManualAdapter:[0,1,1,""]},"canine.adapters.FirecloudAdapter":{evaluate:[0,2,1,""],parse_inputs:[0,2,1,""],parse_outputs:[0,2,1,""],spec:[0,2,1,""]},"canine.adapters.ManualAdapter":{parse_inputs:[0,2,1,""],parse_outputs:[0,2,1,""],spec:[0,2,1,""]},"canine.backends":{DockerTransientImageSlurmBackend:[1,1,1,""],DummySlurmBackend:[1,1,1,""],DummyTransport:[1,1,1,""],LocalSlurmBackend:[1,1,1,""],LocalTransport:[1,1,1,""],RemoteSlurmBackend:[1,1,1,""],RemoteTransport:[1,1,1,""],TransientGCPSlurmBackend:[1,1,1,""],TransientImageSlurmBackend:[1,1,1,""]},"canine.backends.DockerTransientImageSlurmBackend":{estimate_cost:[1,2,1,""],invoke:[1,2,1,""],list_instances_all_zones:[1,2,1,""],pack_batch_script:[1,2,1,""],sacct:[1,2,1,""],sbatch:[1,2,1,""],scancel:[1,2,1,""],sinfo:[1,2,1,""],squeue:[1,2,1,""],srun:[1,2,1,""],stop:[1,2,1,""],transport:[1,2,1,""],wait_for_cluster_ready:[1,2,1,""]},"canine.backends.DummySlurmBackend":{estimate_cost:[1,2,1,""],exec_run:[1,2,1,""],invoke:[1,2,1,""],pack_batch_script:[1,2,1,""],sacct:[1,2,1,""],sbatch:[1,2,1,""],scancel:[1,2,1,""],sinfo:[1,2,1,""],squeue:[1,2,1,""],srun:[1,2,1,""],stop_containers:[1,2,1,""],transport:[1,2,1,""],wait_for_cluster_ready:[1,2,1,""]},"canine.backends.DummyTransport":{chmod:[1,2,1,""],exists:[1,2,1,""],isdir:[1,2,1,""],isfile:[1,2,1,""],islink:[1,2,1,""],listdir:[1,2,1,""],makedirs:[1,2,1,""],mkdir:[1,2,1,""],mklink:[1,2,1,""],normpath:[1,2,1,""],open:[1,2,1,""],receive:[1,2,1,""],receivetree:[1,2,1,""],remove:[1,2,1,""],rename:[1,2,1,""],rmdir:[1,2,1,""],rmtree:[1,2,1,""],send:[1,2,1,""],sendtree:[1,2,1,""],stat:[1,2,1,""],walk:[1,2,1,""]},"canine.backends.LocalSlurmBackend":{estimate_cost:[1,2,1,""],invoke:[1,2,1,""],pack_batch_script:[1,2,1,""],sacct:[1,2,1,""],sbatch:[1,2,1,""],scancel:[1,2,1,""],sinfo:[1,2,1,""],squeue:[1,2,1,""],srun:[1,2,1,""],transport:[1,2,1,""],wait_for_cluster_ready:[1,2,1,""]},"canine.backends.LocalTransport":{chmod:[1,2,1,""],exists:[1,2,1,""],isdir:[1,2,1,""],isfile:[1,2,1,""],islink:[1,2,1,""],listdir:[1,2,1,""],makedirs:[1,2,1,""],mkdir:[1,2,1,""],mklink:[1,2,1,""],normpath:[1,2,1,""],open:[1,2,1,""],receive:[1,2,1,""],receivetree:[1,2,1,""],remove:[1,2,1,""],rename:[1,2,1,""],rmdir:[1,2,1,""],rmtree:[1,2,1,""],send:[1,2,1,""],sendtree:[1,2,1,""],stat:[1,2,1,""],walk:[1,2,1,""]},"canine.backends.RemoteSlurmBackend":{add_key_to_agent:[1,2,1,""],disable_paramiko_rekey:[1,2,1,""],estimate_cost:[1,2,1,""],interactive_login:[1,2,1,""],invoke:[1,2,1,""],load_config_args:[1,2,1,""],pack_batch_script:[1,2,1,""],sacct:[1,2,1,""],sbatch:[1,2,1,""],sbcast:[1,2,1,""],scancel:[1,2,1,""],sinfo:[1,2,1,""],squeue:[1,2,1,""],srun:[1,2,1,""],ssh_agent:[1,2,1,""],transport:[1,2,1,""],wait_for_cluster_ready:[1,2,1,""]},"canine.backends.RemoteTransport":{chmod:[1,2,1,""],exists:[1,2,1,""],isdir:[1,2,1,""],isfile:[1,2,1,""],islink:[1,2,1,""],listdir:[1,2,1,""],makedirs:[1,2,1,""],mkdir:[1,2,1,""],mklink:[1,2,1,""],normpath:[1,2,1,""],open:[1,2,1,""],receive:[1,2,1,""],receivetree:[1,2,1,""],remove:[1,2,1,""],rename:[1,2,1,""],rmdir:[1,2,1,""],rmtree:[1,2,1,""],send:[1,2,1,""],sendtree:[1,2,1,""],stat:[1,2,1,""],walk:[1,2,1,""]},"canine.backends.TransientGCPSlurmBackend":{add_key_to_agent:[1,2,1,""],disable_paramiko_rekey:[1,2,1,""],estimate_cost:[1,2,1,""],interactive_login:[1,2,1,""],invoke:[1,2,1,""],load_config_args:[1,2,1,""],pack_batch_script:[1,2,1,""],sacct:[1,2,1,""],sbatch:[1,2,1,""],sbcast:[1,2,1,""],scancel:[1,2,1,""],sinfo:[1,2,1,""],squeue:[1,2,1,""],srun:[1,2,1,""],ssh_agent:[1,2,1,""],stop:[1,2,1,""],transport:[1,2,1,""],wait_for_cluster_ready:[1,2,1,""]},"canine.backends.TransientImageSlurmBackend":{estimate_cost:[1,2,1,""],invoke:[1,2,1,""],list_instances_all_zones:[1,2,1,""],pack_batch_script:[1,2,1,""],sacct:[1,2,1,""],sbatch:[1,2,1,""],scancel:[1,2,1,""],sinfo:[1,2,1,""],squeue:[1,2,1,""],srun:[1,2,1,""],stop:[1,2,1,""],transport:[1,2,1,""],wait_for_cluster_ready:[1,2,1,""]},"canine.localization":{BatchedLocalizer:[3,1,1,""],LocalLocalizer:[3,1,1,""],NFSLocalizer:[3,1,1,""],RemoteLocalizer:[3,1,1,""]},"canine.localization.BatchedLocalizer":{build_manifest:[3,2,1,""],delocalize:[3,2,1,""],environment:[3,2,1,""],finalize_staging_dir:[3,2,1,""],get_requester_pays:[3,2,1,""],gs_copy:[3,2,1,""],gs_dircp:[3,2,1,""],job_setup_teardown:[3,2,1,""],localize:[3,2,1,""],localize_file:[3,2,1,""],pick_common_inputs:[3,2,1,""],prepare_job_inputs:[3,2,1,""],receivetree:[3,2,1,""],reserve_path:[3,2,1,""],sendtree:[3,2,1,""],transport_context:[3,2,1,""]},"canine.localization.LocalLocalizer":{build_manifest:[3,2,1,""],delocalize:[3,2,1,""],environment:[3,2,1,""],finalize_staging_dir:[3,2,1,""],get_requester_pays:[3,2,1,""],gs_copy:[3,2,1,""],gs_dircp:[3,2,1,""],job_setup_teardown:[3,2,1,""],localize:[3,2,1,""],localize_file:[3,2,1,""],pick_common_inputs:[3,2,1,""],prepare_job_inputs:[3,2,1,""],receivetree:[3,2,1,""],reserve_path:[3,2,1,""],sendtree:[3,2,1,""],transport_context:[3,2,1,""]},"canine.localization.NFSLocalizer":{build_manifest:[3,2,1,""],delocalize:[3,2,1,""],environment:[3,2,1,""],finalize_staging_dir:[3,2,1,""],get_requester_pays:[3,2,1,""],gs_copy:[3,2,1,""],gs_dircp:[3,2,1,""],job_setup_teardown:[3,2,1,""],localize:[3,2,1,""],localize_file:[3,2,1,""],pick_common_inputs:[3,2,1,""],prepare_job_inputs:[3,2,1,""],receivetree:[3,2,1,""],reserve_path:[3,2,1,""],same_volume:[3,2,1,""],sendtree:[3,2,1,""],transport_context:[3,2,1,""]},"canine.localization.RemoteLocalizer":{build_manifest:[3,2,1,""],delocalize:[3,2,1,""],environment:[3,2,1,""],finalize_staging_dir:[3,2,1,""],get_requester_pays:[3,2,1,""],gs_copy:[3,2,1,""],gs_dircp:[3,2,1,""],job_setup_teardown:[3,2,1,""],localize:[3,2,1,""],localize_file:[3,2,1,""],pick_common_inputs:[3,2,1,""],prepare_job_inputs:[3,2,1,""],receivetree:[3,2,1,""],reserve_path:[3,2,1,""],sendtree:[3,2,1,""],transport_context:[3,2,1,""]},"canine.utils":{ArgumentHelper:[4,1,1,""],CustomPricing:[4,1,1,""],check_call:[4,3,1,""],gcp_hourly_cost:[4,3,1,""],get_default_gcp_project:[4,3,1,""],isatty:[4,3,1,""],make_interactive:[4,3,1,""]},"canine.utils.ArgumentHelper":{clear:[4,2,1,""],commandline:[4,2,1,""],copy:[4,2,1,""],fromkeys:[4,2,1,""],get:[4,2,1,""],items:[4,2,1,""],keys:[4,2,1,""],pop:[4,2,1,""],popitem:[4,2,1,""],setdefault:[4,2,1,""],translate:[4,2,1,""],update:[4,2,1,""],values:[4,2,1,""]},"canine.utils.CustomPricing":{count:[4,2,1,""],cpu_cost:[4,2,1,""],ext_cost:[4,2,1,""],index:[4,2,1,""],mem_cost:[4,2,1,""],preempt_cpu_cost:[4,2,1,""],preempt_ext_cost:[4,2,1,""],preempt_mem_cost:[4,2,1,""]},"canine.xargs":{Xargs:[5,1,1,""]},"canine.xargs.Xargs":{fill_config:[5,2,1,""],job_avoid:[5,2,1,""],run_pipeline:[5,2,1,""],stringify:[5,2,1,""]},canine:{Orchestrator:[2,1,1,""],adapters:[0,0,0,"-"],backends:[1,0,0,"-"],localization:[3,0,0,"-"],utils:[4,0,0,"-"],xargs:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"byte":1,"case":4,"class":[0,1,2,3,4,5],"default":[1,2,3,4,5],"final":[2,3,5],"float":[1,4],"function":1,"int":[1,2,4,5],"new":[3,4],"return":[0,1,2,3,4,5],"static":[1,2,4,5],"transient":1,"true":[0,1,3,4],For:[1,3],NFS:[1,3],The:[0,1,4],Used:4,Useful:1,Uses:1,Will:1,aarong:1,absolut:3,abstractcontextmanag:3,abstractloc:[2,5],abstractslurmbackend:[3,5],abstracttransport:3,accept:4,access:1,account:1,across:1,action_on_stop:1,actual:[0,4],adapt:6,add:1,add_key_to_ag:1,added:1,addit:1,after:[1,3],agent:1,alia:[0,4],all:[1,3,4],alreadi:1,also:[0,1,4],ani:[0,1,2,3,4,5],appear:1,appli:[2,5],appropri:0,arbitrari:1,arg:[3,4],argument:[0,1,4],argumenthelp:[1,4],automat:1,avail:1,back:[0,3],backend:[3,5,6],background:1,base:[1,2,3,4,5],batch:[1,3],batchedloc:3,been:[1,2,5],befor:1,begin:3,behav:1,being:3,between:1,binaryio:[1,4],block:1,boi:0,bool:[0,1,2,3,4,5],both:1,brief:1,broad:1,broadcast:[1,3],bucket:3,bufer:4,buffer:[1,4],bufsiz:1,build:[1,3],build_manifest:3,built:5,bytestream:4,call:[1,3],callabl:1,callback:1,calledprocesserror:4,can:[1,3],cancel:1,canine_dummy_slurm:1,canine_output:[2,3],canine_root:3,cfg:[2,5],cga:1,chang:1,channel:4,check:[3,4],check_cal:4,chmod:1,choos:3,clean:2,cleanup:5,clear:4,client:1,clock:1,clock_uptim:1,close:3,clust_frac:1,cluster:[1,3,5],cluster_nam:1,cmd:4,code:[0,1,3,4,5],combin:0,command:[1,3,4,5],commandlin:4,common:3,common_dest:3,compat:1,complet:1,compon:3,comput:[1,3,4],compute_disk_s:1,compute_script:1,compute_script_fil:1,compute_zon:1,conf:1,config:[1,2,5],configur:[0,1,2,3,4,5],connect:1,consist:1,consol:[1,4],construct:3,contain:[0,1,2,3,5],content:[1,6],context:3,control:[1,3],controller_disk_s:1,controller_script:1,controller_typ:1,convert:[2,4,5],copi:[1,3,4],core:[1,2,3,5],correspond:4,cost:[1,4],could:1,count:4,cpu:1,cpu_cost:4,cpu_tim:1,creat:[1,3,4],credenti:3,cryptographi:1,current:[1,4],custompr:4,cwd:5,dalmatian:2,data:3,datafram:[1,2,3,5],deadlock:1,debug:1,defin:1,definit:1,delet:1,deloc:[3,5],deploi:1,dest:[1,3],destin:3,detect:[2,5],determin:3,dict:[0,1,2,3,4,5],dictionari:[0,2,3,4,5],dir:[3,5],directli:1,director:3,directori:[1,2,3,5],dirnam:1,dirpath:1,disabl:1,disable_paramiko_rekei:1,discount:4,disk:4,dispatch:5,docker:1,dockertransientimageslurmbackend:1,doe:[0,3,4],download:3,driver:1,drop:3,dry_run:[2,5],dummi:1,dummyslurmbackend:1,dummytransport:1,dump:5,duplic:4,dure:[1,3],each:[0,1,3],echo:1,effici:3,either:[1,4],elast:1,els:4,empti:[3,4],enabl:[0,1],ensur:1,entir:1,entiti:0,entityexpress:0,entitynam:0,entitytyp:0,environ:[1,3],err:1,estim:1,estimate_cost:1,etc:1,etyp:0,evalu:0,except:[0,3],exec_run:1,execresult:1,exist:[1,3],exist_okai:[1,3],exit:[1,4],expand:4,expect:[1,3],expr:0,express:0,ext_cost:4,external_compute_ip:1,fail:[2,5],failur:1,fals:[0,1,2,3,4,5],featur:1,field:4,file:[0,1,3],filenam:1,filepath:[1,2,5],filesystem:1,fill:3,fill_config:[2,5],finalize_staging_dir:3,finish:3,firecloud:0,firecloudadapt:0,first:[1,4],flag:4,flush:4,folder:[1,3],follow:[1,4],follow_symlink:1,form:4,format:[0,1],found:4,frame:[1,2,3,5],from:[1,2,3,4,5],fromkei:4,full:1,gather:5,gce:1,gcp:[1,4],gcp_hourly_cost:4,gcr:1,gener:1,get:[1,4],get_default_gcp_project:4,get_requester_pai:3,given:[1,2,3,4,5],googl:3,gpu:1,gpu_count:[1,4],gpu_typ:[1,4],gs_copi:3,gs_dircp:3,gsutil:3,gtex:1,handl:[0,1,4],hard_reset_on_orch_init:1,has:[0,1,4],have:[1,2,3,5],hdd_size:4,helper:4,here:3,highcpu:1,hostnam:1,hour:1,hourli:4,imag:1,image_famili:1,immedi:3,implement:1,includ:[3,4],increas:3,index:[4,6],inform:[1,2,5],inherr:1,init_node_count:1,initi:2,input:[0,1,2,3,5],insert:4,instal:1,instanc:1,interact:[1,4],interactive_login:1,interpret:4,invok:1,isatti:4,isdir:1,isfil:1,islink:1,item:4,iter:[1,3,4],its:[3,4],job:[0,1,2,3,5],job_avoid:[2,5],job_cpu_tim:1,job_input:3,job_setup_teardown:3,jobid:[0,1,3],kei:[1,4],keyerror:4,keyword:[1,4],kill:1,kill_straggling_job:1,kwarg:[1,3],lack:4,later:[3,4],less:3,like:[1,4],line:[1,4],list:[0,1],list_instances_all_zon:1,listdir:1,live:1,load:[2,5],load_config_arg:1,local:[0,1,2,5,6],localfil:1,localize_fil:3,localloc:3,localpath:1,localslurmbackend:1,localtransport:1,locat:[1,3],login_count:1,login_typ:1,machin:4,mai:[1,3,4],main:[1,2],make_interact:4,makedir:1,manag:[2,4],manifest:3,manual:0,manualadapt:0,mark:1,match:1,max_node_count:1,max_retri:1,mayb:0,meet:1,mem_cost:4,memori:1,method:4,miss:3,mkdir:1,mklink:1,mode:1,model:1,modul:6,mojav:1,more:3,most:0,mount:3,mount_path:1,move:1,mtype:4,much:0,mung:1,must:[1,3],n_worker:1,name:[1,5],need:1,network:1,nfs_action_on_stop:1,nfs_compute_script:1,nfs_disk_siz:1,nfs_disk_typ:1,nfs_imag:1,nfslocal:3,node:[1,3],node_uptim:1,none:[0,1,3,4,5],normal:1,normpath:1,note:1,noth:0,now:3,number:[3,4],obj:[2,5],object:[1,2,3,4,5],occurr:4,one:3,onli:[1,3,4,5],open:[1,3],oper:1,option:[0,1,3,4,5],orchestr:[2,5],otherwis:[0,4],out:[0,1],output:[0,2,3,5],output_dir:[2,3],outputnam:0,over:1,overhead:1,overrid:3,overwrit:[1,2,5],pack_batch_script:1,page:6,pai:3,pair:4,panda:[1,2,3,5],parallel:1,param:4,paramiko:[1,4],parent:3,pars:[0,1,2],parse_input:0,parse_output:0,partit:1,pass:[1,3],path:[0,1,3],pathtyp:3,pattern:3,perform:5,permiss:1,phase:3,pick_common_input:3,pipelin:[2,3,5],plugin:1,pop:4,popitem:4,port:1,posit:4,power:1,pre:3,preconfigur:1,predetermin:3,preempt_cpu_cost:4,preempt_ext_cost:4,preempt_mem_cost:4,preemptibl:[1,4],prefix:1,prepar:3,prepare_job_input:3,present:4,pretti:0,previous:[2,5],price:4,prior:3,probabl:1,product:0,project:[1,3,4],proper:[1,3],properli:1,properti:[0,4],provid:[1,3,4],provision_storage_container_host:1,provision_worker_container_host:1,python:[1,4],queu:3,queue:1,rais:[0,4],raw:0,read:[1,2,4,5],readi:[1,3],receiv:1,receivetre:[1,3],recent:0,recommend:1,recurs:[1,2,5],region:4,regular:1,rekei:1,rel:[1,3],remot:[1,3],remotefil:1,remoteloc:3,remotepath:1,remoteslurmbackend:1,remotetransport:1,remov:[1,4,5],renam:1,request:[1,3],requir:1,rerun:[2,5],reserve_path:3,reset:[2,5],resid:3,resourc:[1,5],respons:4,restart:1,result:[0,3],retri:1,rmdir:1,rmtree:1,root:1,run:[1,2,3,4,5],run_pipelin:[2,5],runtim:[2,5],sacct:1,same:[0,1,3],same_volum:3,sbatch:1,sbcast:1,scan:3,scancel:1,schedul:2,script:[1,3],script_path:1,search:6,secondary_disk_s:1,see:1,self:[0,1,3],send:1,sendtre:[1,3],seri:2,session:1,set:[0,1,3,4],setdefault:4,setup:3,sftp:1,shallow:4,share:[1,4],should:[1,3,4],show:1,similar:3,simplifi:5,sinfo:1,singl:[0,1],size:[3,4],skip:[2,5],slurm:[1,2,3,4,5],slurm_conf_path:1,slurm_gcp_dock:1,slurmctld:1,slurmdbd:1,slurmind:1,slurmopt:1,slurmparam:1,some:4,sourc:3,spec:0,specif:[0,1,3,5],specifi:[1,3,4],spun:1,squeue:1,src:[1,3],srun:1,ssd_size:4,ssh2:1,ssh:1,ssh_agent:1,ssh_auth_sock:1,sshclient:1,stage:[2,3,5],staging_dir:[1,3],standard:1,start:1,startup:3,stat:1,statu:[1,4],stderr:[1,4],stdin:[1,4],stdout:[1,4],step:3,stop:1,stop_contain:1,storag:3,store:3,str:[0,1,2,3,4,5],strategi:3,stream:[1,4],string:[2,4,5],stringifi:[2,5],structur:1,stty:1,stupid:1,subdirectori:1,succeed:[2,5],suitabl:1,sum:1,support:1,sustain:4,symlink:[1,3],take:[0,3,4],task:[2,3],teardown:3,temporari:5,termin:1,thei:1,thi:[1,2,3,4,5],those:3,through:[1,2,3,5],timeout:1,too:1,tot_node_count:1,total:1,transfer:3,transfer_bucket:3,transientgcpslurmbackend:1,transientimageslurmbackend:1,translat:4,transport:[1,3],transport_context:3,treat:3,tree:[1,3],tty:4,tupl:[1,3,4],type:[1,4],union:[0,1,2,5],unit:1,unittest:1,unlik:3,unpack:[0,1],until:1,updat:4,upload:3,uptim:1,usag:4,use:1,useabl:0,used:3,useful:1,user:[0,1],using:[1,2],usr:1,util:[1,3,6],valid:1,valu:[0,1,4],valueerror:4,vari:4,variabl:[1,3],version:1,view:[3,4],wait_for_cluster_readi:1,walk:1,when:[1,3],where:[1,3],which:[1,2,3,5],within:1,without:1,work:[1,5],worker:1,worker_prefix:1,worker_typ:1,workspac:0,would:1,write:1,write_to_workspac:0,written:[0,1,4],xarg:6,yield:1,you:1,your:1,zone:1},titles:["canine.adapters","canine.backends","canine","canine.localization","canine.utils","canine.xargs","Welcome to Canine\u2019s documentation!"],titleterms:{adapt:0,backend:1,canin:[0,1,2,3,4,5,6],document:6,indic:6,local:3,tabl:6,util:4,welcom:6,xarg:5}})