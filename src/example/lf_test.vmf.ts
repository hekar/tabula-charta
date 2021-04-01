export const lfTestVmf = `
versioninfo
{
	"editorversion" "400"
	"editorbuild" "4715"
	"mapversion" "24"
	"formatversion" "100"
	"prefab" "0"
}
visgroups
{
}
viewsettings
{
	"bSnapToGrid" "1"
	"bShowGrid" "1"
	"bShowLogicalGrid" "0"
	"nGridSpacing" "8"
	"bShow3DGrid" "0"
}
world
{
	"id" "1"
	"mapversion" "24"
	"classname" "worldspawn"
	"detailmaterial" "detail/detailsprites"
	"detailvbsp" "detail.vbsp"
	"gamemode" "1"
	"maxpropscreenwidth" "-1"
	"skyname" "sky_day01_01"
	solid
	{
		"id" "9"
		side
		{
			"id" "48"
			"plane" "(-1024 -512 576) (-1024 512 576) (512 512 576)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "47"
			"plane" "(-1024 512 512) (-1024 -512 512) (512 -512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "46"
			"plane" "(-1024 -512 512) (-1024 512 512) (-1024 512 576)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "45"
			"plane" "(512 512 512) (512 -512 512) (512 -512 576)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "44"
			"plane" "(-1024 512 512) (512 512 512) (512 512 576)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "43"
			"plane" "(512 -512 512) (-1024 -512 512) (-1024 -512 576)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "0 232 229"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "269"
		side
		{
			"id" "144"
			"plane" "(-1024 -512 -128) (512 -512 -128) (512 512 -128)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "143"
			"plane" "(-1024 512 -64) (-1024 -512 -64) (-1024 -512 -128)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "142"
			"plane" "(512 512 -128) (512 -512 -128) (512 -512 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "141"
			"plane" "(512 512 -64) (-1024 512 -64) (-1024 512 -128)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "140"
			"plane" "(512 -512 -128) (-1024 -512 -128) (-1024 -512 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "139"
			"plane" "(-256 -256 -96) (-256 -384 -96) (-448 -384 -96)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "220 220 220"
			"groupid" "279"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "271"
		side
		{
			"id" "150"
			"plane" "(-1024 512 -64) (-1024 -512 -64) (-1024 -512 -128)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "149"
			"plane" "(512 512 -64) (-1024 512 -64) (-1024 512 -128)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "148"
			"plane" "(512 -512 -128) (-1024 -512 -128) (-1024 -512 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "147"
			"plane" "(-448 -256 -64) (-256 -256 -64) (-256 -384 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "146"
			"plane" "(-448 -384 -96) (-256 -384 -96) (-256 -256 -96)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "145"
			"plane" "(-448 -384 -96) (-448 -384 -64) (-448 -256 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "220 220 220"
			"groupid" "279"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "273"
		side
		{
			"id" "156"
			"plane" "(512 512 -128) (512 -512 -128) (512 -512 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "155"
			"plane" "(512 512 -64) (-1024 512 -64) (-1024 512 -128)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "154"
			"plane" "(512 -512 -128) (-1024 -512 -128) (-1024 -512 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "153"
			"plane" "(-448 -256 -64) (-256 -256 -64) (-256 -384 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "152"
			"plane" "(-448 -384 -96) (-256 -384 -96) (-256 -256 -96)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "151"
			"plane" "(-256 -384 -64) (-256 -384 -96) (-256 -256 -96)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "220 220 220"
			"groupid" "279"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "275"
		side
		{
			"id" "162"
			"plane" "(512 512 -64) (-1024 512 -64) (-1024 512 -128)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "161"
			"plane" "(-448 -256 -64) (-256 -256 -64) (-256 -384 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "160"
			"plane" "(-448 -384 -96) (-256 -384 -96) (-256 -256 -96)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "159"
			"plane" "(-448 -256 -64) (-448 -384 -64) (-448 -384 -96)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "158"
			"plane" "(-256 -256 -96) (-256 -384 -96) (-256 -384 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "157"
			"plane" "(-448 -256 -96) (-448 -256 -64) (-256 -256 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "220 220 220"
			"groupid" "279"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "277"
		side
		{
			"id" "168"
			"plane" "(512 -512 -128) (-1024 -512 -128) (-1024 -512 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "167"
			"plane" "(-448 -256 -64) (-256 -256 -64) (-256 -384 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "166"
			"plane" "(-448 -384 -96) (-256 -384 -96) (-256 -256 -96)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "165"
			"plane" "(-448 -256 -64) (-448 -384 -64) (-448 -384 -96)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "164"
			"plane" "(-256 -256 -96) (-256 -384 -96) (-256 -384 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "163"
			"plane" "(-448 -384 -64) (-448 -384 -96) (-256 -384 -96)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "220 220 220"
			"groupid" "279"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "441"
		side
		{
			"id" "240"
			"plane" "(-960 448 512) (-960 512 512) (448 512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "239"
			"plane" "(-960 512 288) (-960 512 512) (-960 448 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "238"
			"plane" "(448 448 288) (448 448 512) (448 512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "237"
			"plane" "(448 512 288) (448 512 512) (-960 512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "236"
			"plane" "(-960 448 288) (-960 448 512) (448 448 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "235"
			"plane" "(-960 512 288) (-960 448 288) (448 448 288)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "0 250 183"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "442"
		side
		{
			"id" "246"
			"plane" "(-960 512 -64) (-960 448 -64) (448 448 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "245"
			"plane" "(-960 448 -64) (-960 512 -64) (-960 512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "244"
			"plane" "(448 512 -64) (448 448 -64) (448 448 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "243"
			"plane" "(-960 512 -64) (448 512 -64) (448 512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "242"
			"plane" "(448 448 -64) (-960 448 -64) (-960 448 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "241"
			"plane" "(-960 448 288) (-960 512 288) (448 512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "0 250 183"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "443"
		side
		{
			"id" "252"
			"plane" "(-960 -512 512) (-960 -448 512) (448 -448 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "251"
			"plane" "(-960 -448 288) (-960 -448 512) (-960 -512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "250"
			"plane" "(448 -512 288) (448 -512 512) (448 -448 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "249"
			"plane" "(448 -448 288) (448 -448 512) (-960 -448 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "248"
			"plane" "(-960 -512 288) (-960 -512 512) (448 -512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "247"
			"plane" "(-960 -448 288) (-960 -512 288) (448 -512 288)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "0 168 253"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "444"
		side
		{
			"id" "258"
			"plane" "(-960 -448 -64) (-960 -512 -64) (448 -512 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "257"
			"plane" "(-960 -512 -64) (-960 -448 -64) (-960 -448 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "256"
			"plane" "(448 -448 -64) (448 -512 -64) (448 -512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "255"
			"plane" "(-960 -448 -64) (448 -448 -64) (448 -448 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "254"
			"plane" "(448 -512 -64) (-960 -512 -64) (-960 -512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "253"
			"plane" "(-960 -512 288) (-960 -448 288) (448 -448 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "0 168 253"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "445"
		side
		{
			"id" "264"
			"plane" "(448 -512 512) (448 512 512) (512 512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "263"
			"plane" "(448 512 288) (448 512 512) (448 -512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "262"
			"plane" "(512 -512 288) (512 -512 512) (512 512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "261"
			"plane" "(512 512 288) (512 512 512) (448 512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "260"
			"plane" "(448 -512 288) (448 -512 512) (512 -512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "259"
			"plane" "(448 512 288) (448 -512 288) (512 -512 288)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "0 102 211"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "446"
		side
		{
			"id" "270"
			"plane" "(448 512 -64) (448 -512 -64) (512 -512 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "269"
			"plane" "(448 -512 -64) (448 512 -64) (448 512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "268"
			"plane" "(512 512 -64) (512 -512 -64) (512 -512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "267"
			"plane" "(448 512 -64) (512 512 -64) (512 512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "266"
			"plane" "(512 -512 -64) (448 -512 -64) (448 -512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "265"
			"plane" "(448 -512 288) (448 512 288) (512 512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "0 102 211"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "447"
		side
		{
			"id" "276"
			"plane" "(-1024 -512 512) (-1024 512 512) (-960 512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "275"
			"plane" "(-1024 512 288) (-1024 512 512) (-1024 -512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "274"
			"plane" "(-960 -512 288) (-960 -512 512) (-960 512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "273"
			"plane" "(-960 512 288) (-960 512 512) (-1024 512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "272"
			"plane" "(-1024 -512 288) (-1024 -512 512) (-960 -512 512)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "271"
			"plane" "(-1024 512 288) (-1024 -512 288) (-960 -512 288)"
			"material" "TOOLS/TOOLSSKYBOX2D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "0 140 205"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	solid
	{
		"id" "448"
		side
		{
			"id" "282"
			"plane" "(-1024 512 -64) (-1024 -512 -64) (-960 -512 -64)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "281"
			"plane" "(-1024 -512 -64) (-1024 512 -64) (-1024 512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "280"
			"plane" "(-960 512 -64) (-960 -512 -64) (-960 -512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "279"
			"plane" "(-1024 512 -64) (-960 512 -64) (-960 512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "278"
			"plane" "(-960 -512 -64) (-1024 -512 -64) (-1024 -512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "277"
			"plane" "(-1024 -512 288) (-1024 512 288) (-960 512 288)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "0 140 205"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	group
	{
		"id" "279"
		editor
		{
			"color" "220 220 220"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	group
	{
		"id" "1300"
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
}
entity
{
	"id" "64"
	"classname" "lfc_prop_flag"
	"angles" "0 0 0"
	"team" "2"
	"origin" "-704 -192 -55"
	editor
	{
		"color" "220 30 220"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 0]"
	}
}
entity
{
	"id" "73"
	"classname" "lfc_prop_flag"
	"angles" "0 0 0"
	"team" "3"
	"origin" "-704 -320 -51.152"
	editor
	{
		"color" "220 30 220"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 0]"
	}
}
entity
{
	"id" "93"
	"classname" "lf_copyright"
	"oauthor" "Hekar Khani"
	"origin" "-928 -240 416"
	editor
	{
		"color" "220 30 220"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 500]"
	}
}
entity
{
	"id" "306"
	"classname" "lfc_trigger_disposer"
	"team" "1"
	solid
	{
		"id" "264"
		side
		{
			"id" "174"
			"plane" "(-448 -256 -64) (-256 -256 -64) (-256 -384 -64)"
			"material" "AZ/TILES_PLAIN_D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "173"
			"plane" "(-448 -384 -96) (-256 -384 -96) (-256 -256 -96)"
			"material" "AZ/TILES_PLAIN_D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "172"
			"plane" "(-448 -256 -64) (-448 -384 -64) (-448 -384 -96)"
			"material" "AZ/TILES_PLAIN_D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "171"
			"plane" "(-256 -256 -96) (-256 -384 -96) (-256 -384 -64)"
			"material" "AZ/TILES_PLAIN_D"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "170"
			"plane" "(-256 -256 -64) (-448 -256 -64) (-448 -256 -96)"
			"material" "AZ/TILES_PLAIN_D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "169"
			"plane" "(-256 -384 -96) (-448 -384 -96) (-448 -384 -64)"
			"material" "AZ/TILES_PLAIN_D"
			"uaxis" "[1 0 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "220 30 220"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "220 30 220"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 1000]"
	}
}
entity
{
	"id" "454"
	"classname" "light_environment"
	"_ambient" "255 255 255 20"
	"_ambientHDR" "-1 -1 -1 1"
	"_AmbientScaleHDR" "1"
	"_light" "255 255 255 200"
	"_lightHDR" "-1 -1 -1 1"
	"_lightscaleHDR" "1"
	"angles" "0 0 0"
	"pitch" "0"
	"SunSpreadAngle" "0"
	"origin" "-951 -272.009 364.375"
	editor
	{
		"color" "220 30 220"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 4000]"
	}
}
entity
{
	"id" "461"
	"classname" "env_sun"
	"angles" "0 0 0"
	"HDRColorScale" "1.0"
	"material" "sprites/light_glow02_add_noz"
	"overlaycolor" "0 0 0"
	"overlaymaterial" "sprites/light_glow02_add_noz"
	"overlaysize" "-1"
	"pitch" "0"
	"rendercolor" "100 80 80"
	"size" "16"
	"use_angles" "0"
	"origin" "-951 -386.849 373.964"
	editor
	{
		"color" "255 0 0"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 4500]"
	}
}
entity
{
	"id" "466"
	"classname" "lf_player_spawnpoint"
	"angles" "0 0 0"
	"team" "2"
	"origin" "-388.664 47.3076 -55"
	editor
	{
		"color" "220 30 220"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 5000]"
	}
}
entity
{
	"id" "570"
	"classname" "lf_player_spawnpoint"
	"angles" "0 0 0"
	"team" "3"
	"origin" "-420.386 105.871 -64"
	editor
	{
		"color" "220 30 220"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 5000]"
	}
}
entity
{
	"id" "961"
	"classname" "func_button"
	"disablereceiveshadows" "0"
	"health" "0"
	"lip" "0"
	"locked_sentence" "0"
	"locked_sound" "0"
	"movedir" "0 0 0"
	"origin" "-496 444 8"
	"renderamt" "255"
	"rendercolor" "255 255 255"
	"renderfx" "0"
	"rendermode" "0"
	"sounds" "0"
	"spawnflags" "1025"
	"speed" "5"
	"unlocked_sentence" "0"
	"unlocked_sound" "0"
	"wait" "3"
	connections
	{
		"OnPressed" "blu_spawner_3x5,Spawn,,0,-1"
	}
	solid
	{
		"id" "962"
		side
		{
			"id" "396"
			"plane" "(-464 440 16) (-464 448 16) (-448 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -320] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "395"
			"plane" "(-464 448 0) (-464 440 0) (-448 440 0)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -320] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "394"
			"plane" "(-464 440 0) (-464 448 0) (-464 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "393"
			"plane" "(-448 448 0) (-448 440 0) (-448 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "392"
			"plane" "(-464 448 0) (-448 448 0) (-448 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -320] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "391"
			"plane" "(-448 440 0) (-464 440 0) (-464 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -320] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 7000]"
	}
}
entity
{
	"id" "937"
	"classname" "func_button"
	"disablereceiveshadows" "0"
	"health" "0"
	"lip" "0"
	"locked_sentence" "0"
	"locked_sound" "0"
	"movedir" "0 0 0"
	"origin" "-528 444 8"
	"renderamt" "255"
	"rendercolor" "255 255 255"
	"renderfx" "0"
	"rendermode" "0"
	"sounds" "0"
	"spawnflags" "1025"
	"speed" "5"
	"unlocked_sentence" "0"
	"unlocked_sound" "0"
	"wait" "3"
	connections
	{
		"OnPressed" "blu_spawner_3x4,Spawn,,0,-1"
	}
	solid
	{
		"id" "938"
		side
		{
			"id" "402"
			"plane" "(-496 440 16) (-496 448 16) (-480 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -192] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "401"
			"plane" "(-496 448 0) (-496 440 0) (-480 440 0)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -192] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "400"
			"plane" "(-496 440 0) (-496 448 0) (-496 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "399"
			"plane" "(-480 448 0) (-480 440 0) (-480 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "398"
			"plane" "(-496 448 0) (-480 448 0) (-480 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -192] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "397"
			"plane" "(-480 440 0) (-496 440 0) (-496 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -192] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 7000]"
	}
}
entity
{
	"id" "931"
	"classname" "func_button"
	"disablereceiveshadows" "0"
	"health" "0"
	"lip" "0"
	"locked_sentence" "0"
	"locked_sound" "0"
	"movedir" "0 0 0"
	"origin" "-560 444 8"
	"renderamt" "255"
	"rendercolor" "255 255 255"
	"renderfx" "0"
	"rendermode" "0"
	"sounds" "0"
	"spawnflags" "1025"
	"speed" "5"
	"unlocked_sentence" "0"
	"unlocked_sound" "0"
	"wait" "3"
	connections
	{
		"OnPressed" "blu_spawner_3x3,Spawn,,0,-1"
	}
	solid
	{
		"id" "932"
		side
		{
			"id" "408"
			"plane" "(-528 440 16) (-528 448 16) (-512 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -64] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "407"
			"plane" "(-528 448 0) (-528 440 0) (-512 440 0)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -64] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "406"
			"plane" "(-528 440 0) (-528 448 0) (-528 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "405"
			"plane" "(-512 448 0) (-512 440 0) (-512 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "404"
			"plane" "(-528 448 0) (-512 448 0) (-512 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -64] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "403"
			"plane" "(-512 440 0) (-528 440 0) (-528 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 -64] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 7000]"
	}
}
entity
{
	"id" "762"
	"classname" "func_button"
	"disablereceiveshadows" "0"
	"health" "0"
	"lip" "0"
	"locked_sentence" "0"
	"locked_sound" "0"
	"movedir" "0 0 0"
	"origin" "-592 444 8"
	"renderamt" "255"
	"rendercolor" "255 255 255"
	"renderfx" "0"
	"rendermode" "0"
	"sounds" "0"
	"spawnflags" "1025"
	"speed" "5"
	"unlocked_sentence" "0"
	"unlocked_sound" "0"
	"wait" "3"
	connections
	{
		"OnPressed" "blu_spawner_2x5,Spawn,,0,-1"
	}
	solid
	{
		"id" "763"
		side
		{
			"id" "414"
			"plane" "(-560 440 16) (-560 448 16) (-544 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 64] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "413"
			"plane" "(-560 448 0) (-560 440 0) (-544 440 0)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 64] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "412"
			"plane" "(-560 440 0) (-560 448 0) (-560 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "411"
			"plane" "(-544 448 0) (-544 440 0) (-544 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "410"
			"plane" "(-560 448 0) (-544 448 0) (-544 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 64] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "409"
			"plane" "(-544 440 0) (-560 440 0) (-560 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 64] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 7000]"
	}
}
entity
{
	"id" "756"
	"classname" "func_button"
	"disablereceiveshadows" "0"
	"health" "0"
	"lip" "0"
	"locked_sentence" "0"
	"locked_sound" "0"
	"movedir" "0 0 0"
	"origin" "-624 444 8"
	"renderamt" "255"
	"rendercolor" "255 255 255"
	"renderfx" "0"
	"rendermode" "0"
	"sounds" "0"
	"spawnflags" "1025"
	"speed" "5"
	"unlocked_sentence" "0"
	"unlocked_sound" "0"
	"wait" "3"
	connections
	{
		"OnPressed" "blu_spawner_2x4,Spawn,,0,-1"
	}
	solid
	{
		"id" "757"
		side
		{
			"id" "420"
			"plane" "(-592 440 16) (-592 448 16) (-576 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 192] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "419"
			"plane" "(-592 448 0) (-592 440 0) (-576 440 0)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 192] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "418"
			"plane" "(-592 440 0) (-592 448 0) (-592 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "417"
			"plane" "(-576 448 0) (-576 440 0) (-576 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "416"
			"plane" "(-592 448 0) (-576 448 0) (-576 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 192] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "415"
			"plane" "(-576 440 0) (-592 440 0) (-592 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 192] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 7000]"
	}
}
entity
{
	"id" "750"
	"classname" "func_button"
	"disablereceiveshadows" "0"
	"health" "0"
	"lip" "0"
	"locked_sentence" "0"
	"locked_sound" "0"
	"movedir" "0 0 0"
	"origin" "-656 444 8"
	"renderamt" "255"
	"rendercolor" "255 255 255"
	"renderfx" "0"
	"rendermode" "0"
	"sounds" "0"
	"spawnflags" "1025"
	"speed" "5"
	"unlocked_sentence" "0"
	"unlocked_sound" "0"
	"wait" "3"
	connections
	{
		"OnPressed" "blu_spawner_2x3,Spawn,,0,-1"
	}
	solid
	{
		"id" "751"
		side
		{
			"id" "426"
			"plane" "(-624 440 16) (-624 448 16) (-608 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 320] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "425"
			"plane" "(-624 448 0) (-624 440 0) (-608 440 0)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 320] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "424"
			"plane" "(-624 440 0) (-624 448 0) (-624 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "423"
			"plane" "(-608 448 0) (-608 440 0) (-608 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "422"
			"plane" "(-624 448 0) (-608 448 0) (-608 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 320] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "421"
			"plane" "(-608 440 0) (-624 440 0) (-624 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 320] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 7000]"
	}
}
entity
{
	"id" "744"
	"classname" "func_button"
	"disablereceiveshadows" "0"
	"health" "0"
	"lip" "0"
	"locked_sentence" "0"
	"locked_sound" "0"
	"movedir" "0 0 0"
	"origin" "-688 444 8"
	"renderamt" "255"
	"rendercolor" "255 255 255"
	"renderfx" "0"
	"rendermode" "0"
	"sounds" "0"
	"spawnflags" "1025"
	"speed" "5"
	"unlocked_sentence" "0"
	"unlocked_sound" "0"
	"wait" "3"
	connections
	{
		"OnPressed" "blu_spawner_2x2,Spawn,,0,-1"
	}
	solid
	{
		"id" "745"
		side
		{
			"id" "432"
			"plane" "(-656 440 16) (-656 448 16) (-640 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 448] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "431"
			"plane" "(-656 448 0) (-656 440 0) (-640 440 0)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 448] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "430"
			"plane" "(-656 440 0) (-656 448 0) (-656 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "429"
			"plane" "(-640 448 0) (-640 440 0) (-640 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "428"
			"plane" "(-656 448 0) (-640 448 0) (-640 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 448] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "427"
			"plane" "(-640 440 0) (-656 440 0) (-656 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 448] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 7000]"
	}
}
entity
{
	"id" "738"
	"classname" "func_button"
	"disablereceiveshadows" "0"
	"health" "0"
	"lip" "0"
	"locked_sentence" "0"
	"locked_sound" "0"
	"movedir" "0 0 0"
	"origin" "-720 444 8"
	"renderamt" "255"
	"rendercolor" "255 255 255"
	"renderfx" "0"
	"rendermode" "0"
	"sounds" "0"
	"spawnflags" "1025"
	"speed" "5"
	"unlocked_sentence" "0"
	"unlocked_sound" "0"
	"wait" "3"
	connections
	{
		"OnPressed" "blu_spawner_1x5,Spawn,,0,-1"
	}
	solid
	{
		"id" "739"
		side
		{
			"id" "438"
			"plane" "(-688 440 16) (-688 448 16) (-672 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 64] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "437"
			"plane" "(-688 448 0) (-688 440 0) (-672 440 0)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 64] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "436"
			"plane" "(-688 440 0) (-688 448 0) (-688 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "435"
			"plane" "(-672 448 0) (-672 440 0) (-672 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "434"
			"plane" "(-688 448 0) (-672 448 0) (-672 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 64] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "433"
			"plane" "(-672 440 0) (-688 440 0) (-688 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 64] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 7000]"
	}
}
entity
{
	"id" "673"
	"classname" "lfc_point_blockspawner"
	"angles" "0 0 0"
	"block" "11"
	"targetname" "blu_spawner_3x5"
	"team" "2"
	"origin" "-576 368 128"
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3000]"
	}
}
entity
{
	"id" "665"
	"classname" "lfc_point_blockspawner"
	"angles" "0 0 0"
	"block" "10"
	"targetname" "blu_spawner_3x4"
	"team" "2"
	"origin" "-608 336 128"
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3000]"
	}
}
entity
{
	"id" "655"
	"classname" "lfc_point_blockspawner"
	"angles" "0 0 0"
	"block" "9"
	"targetname" "blu_spawner_3x3"
	"team" "2"
	"origin" "-608 368 128"
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3000]"
	}
}
entity
{
	"id" "629"
	"classname" "lfc_point_blockspawner"
	"angles" "0 0 0"
	"block" "8"
	"targetname" "blu_spawner_2x5"
	"team" "2"
	"origin" "-640 368 128"
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3000]"
	}
}
entity
{
	"id" "621"
	"classname" "lfc_point_blockspawner"
	"angles" "0 0 0"
	"block" "7"
	"targetname" "blu_spawner_2x4"
	"team" "2"
	"origin" "-672 368 128"
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3000]"
	}
}
entity
{
	"id" "611"
	"classname" "lfc_point_blockspawner"
	"angles" "0 0 0"
	"block" "5"
	"targetname" "blu_spawner_2x2"
	"team" "2"
	"origin" "-736 368 128"
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3000]"
	}
}
entity
{
	"id" "547"
	"classname" "func_button"
	"disablereceiveshadows" "0"
	"health" "0"
	"lip" "0"
	"locked_sentence" "0"
	"locked_sound" "0"
	"movedir" "0 0 0"
	"origin" "-752 444 8"
	"renderamt" "255"
	"rendercolor" "255 255 255"
	"renderfx" "0"
	"rendermode" "0"
	"sounds" "0"
	"spawnflags" "1025"
	"speed" "5"
	"unlocked_sentence" "0"
	"unlocked_sound" "0"
	"wait" "3"
	connections
	{
		"OnPressed" "blu_spawner_1x4,Spawn,,0,-1"
	}
	solid
	{
		"id" "330"
		side
		{
			"id" "444"
			"plane" "(-720 440 16) (-720 448 16) (-704 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 192] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "443"
			"plane" "(-720 448 0) (-720 440 0) (-704 440 0)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 192] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "442"
			"plane" "(-720 440 0) (-720 448 0) (-720 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "441"
			"plane" "(-704 448 0) (-704 440 0) (-704 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "440"
			"plane" "(-720 448 0) (-704 448 0) (-704 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 192] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "439"
			"plane" "(-704 440 0) (-720 440 0) (-720 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 192] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 7000]"
	}
}
entity
{
	"id" "518"
	"classname" "func_button"
	"disablereceiveshadows" "0"
	"health" "0"
	"lip" "0"
	"locked_sentence" "0"
	"locked_sound" "0"
	"movedir" "0 0 0"
	"origin" "-744 444 8"
	"renderamt" "255"
	"rendercolor" "255 255 255"
	"renderfx" "0"
	"rendermode" "0"
	"sounds" "0"
	"spawnflags" "1025"
	"speed" "5"
	"unlocked_sentence" "0"
	"unlocked_sound" "0"
	"wait" "3"
	connections
	{
		"OnPressed" "blu_spawner_1x3,Spawn,,0,-1"
	}
	solid
	{
		"id" "332"
		side
		{
			"id" "450"
			"plane" "(-752 440 16) (-752 448 16) (-736 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 320] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "449"
			"plane" "(-752 448 0) (-752 440 0) (-736 440 0)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 320] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "448"
			"plane" "(-752 440 0) (-752 448 0) (-752 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "447"
			"plane" "(-736 448 0) (-736 440 0) (-736 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "446"
			"plane" "(-752 448 0) (-736 448 0) (-736 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 320] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "445"
			"plane" "(-736 440 0) (-752 440 0) (-752 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 320] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 6500]"
	}
}
entity
{
	"id" "489"
	"classname" "lfc_point_blockspawner"
	"angles" "0 0 0"
	"block" "4"
	"targetname" "blu_spawner_1x5"
	"team" "2"
	"origin" "-640 336 128"
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3000]"
	}
}
entity
{
	"id" "483"
	"classname" "lfc_point_blockspawner"
	"angles" "0 0 0"
	"block" "3"
	"targetname" "blu_spawner_1x4"
	"team" "2"
	"origin" "-672 336 128"
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3000]"
	}
}
entity
{
	"id" "479"
	"classname" "lfc_point_blockspawner"
	"angles" "0 0 0"
	"block" "2"
	"targetname" "blu_spawner_1x3"
	"team" "2"
	"origin" "-704 336 128"
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3000]"
	}
}
entity
{
	"id" "386"
	"classname" "lfc_point_blockspawner"
	"angles" "0 0 0"
	"block" "6"
	"targetname" "blu_spawner_2x3"
	"team" "2"
	"origin" "-704 368 128"
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3000]"
	}
}
entity
{
	"id" "362"
	"classname" "func_button"
	"disablereceiveshadows" "0"
	"health" "0"
	"lip" "0"
	"locked_sentence" "0"
	"locked_sound" "0"
	"movedir" "0 0 0"
	"origin" "-776 444 8"
	"renderamt" "255"
	"rendercolor" "255 255 255"
	"renderfx" "0"
	"rendermode" "0"
	"sounds" "0"
	"spawnflags" "1025"
	"speed" "5"
	"unlocked_sentence" "0"
	"unlocked_sound" "0"
	"wait" "3"
	connections
	{
		"OnPressed" "blu_spawner_1x2,Spawn,,0,-1"
	}
	solid
	{
		"id" "337"
		side
		{
			"id" "456"
			"plane" "(-784 440 16) (-784 448 16) (-768 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 448] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "455"
			"plane" "(-784 448 0) (-784 440 0) (-768 440 0)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 448] 0.25"
			"vaxis" "[0 -1 0 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "454"
			"plane" "(-784 440 0) (-784 448 0) (-784 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "453"
			"plane" "(-768 448 0) (-768 440 0) (-768 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[0 1 0 0] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "452"
			"plane" "(-784 448 0) (-768 448 0) (-768 448 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 448] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		side
		{
			"id" "451"
			"plane" "(-768 440 0) (-784 440 0) (-784 440 16)"
			"material" "BRICK/BRICKFLOOR001A"
			"uaxis" "[1 0 0 448] 0.25"
			"vaxis" "[0 0 -1 0] 0.25"
			"rotation" "0"
			"lightmapscale" "16"
			"smoothing_groups" "0"
		}
		editor
		{
			"color" "120 169 0"
			"visgroupshown" "1"
			"visgroupautoshown" "1"
		}
	}
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3500]"
	}
}
entity
{
	"id" "348"
	"classname" "lfc_point_blockspawner"
	"angles" "0 0 0"
	"block" "1"
	"targetname" "blu_spawner_1x2"
	"team" "2"
	"origin" "-736 336 128"
	editor
	{
		"color" "120 169 0"
		"groupid" "1300"
		"visgroupshown" "1"
		"visgroupautoshown" "1"
		"logicalpos" "[0 3000]"
	}
}
cameras
{
	"activecamera" "-1"
}
cordon
{
	"mins" "(-1024 -1024 -1024)"
	"maxs" "(1024 1024 1024)"
	"active" "0"
}
`;
