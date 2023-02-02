<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Edited by XMLSpy� -->
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns="http://www.w3.org/1999/xhtml">
	<style>
		body {
		font-size: 14px;
		font-family:Arial;
		}
		.sitemap {
		margin-top: 10px;
		border: 4px solid teal;
		}
		.sitemap-area {
		padding:4px
		}
		table {
		width: 100%
		}
		table th {
		text-align: left;padding: 4px;
		background-color: #9f8Fbf;
		color: #fff
		}
		table tr:nth-child(even) {
		background-color: #eeF8ff;
		color: #fff
		}
		table tr td {
		padding: 2px;
		color: #000
		}
		a {
		text-decoration: none
		}
	</style>
	<body>
		<div class="header">
			<div class="title">
				<div class="count">
					Total of URLs:
					44</div>
			</div>
		</div>
		<div class="sitemap">
			<div class="sitemap-area">
				<table>
					<thead>
						<tr>
							<th>
								URL</th>
							<th>Last
								Modification Date</th>
							<th>Change
								Frequency</th>
							<th>
								Priority</th>
						</tr>
					</thead>


					<tbody>
						<xsl:for-each select="pages/page">
							<tr>
								<td>
									<a target="_blank" href="{url}">
										<xsl:value-of select="url" />
									</a>
								</td>
								<td>
									<xsl:value-of select="date" />
								</td>
								<td>
									<xsl:value-of select="frequency" />
								</td>
								<td>
									<xsl:value-of select="priority" />
								</td>
							</tr>
						</xsl:for-each>
					</tbody>
				</table>
			</div>
		</div>
	</body>
</html>